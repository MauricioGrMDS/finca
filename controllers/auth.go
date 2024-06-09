package controllers

import (
	"encoding/json"
	"fincaBackend/jwt"
	"fincaBackend/models"
	"net/http"
)

// var newAuth models.Auth

func Login(w http.ResponseWriter, r *http.Request) {
	var loginReq models.LoginRequest
	json.NewDecoder(r.Body).Decode(&loginReq)
	userData, _ := models.GetUserByEmail(loginReq.Email)
	if userData.Password != loginReq.Password {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	tokenString, _ := jwt.CreateToken(userData.Email)
	loggedUser, _ := models.GetUserById(userData.UserId)

	response := models.LoginResponse{
		Token: tokenString,
		User:  loggedUser,
	}

	res, _ := json.Marshal(response)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
