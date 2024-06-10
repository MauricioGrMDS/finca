package controllers

import (
	"encoding/json"
	"fincaBackend/jwt"
	"fincaBackend/models"
	"net/http"
)

type ErrorResponse struct {
	Valid bool   `json:"valid"`
	Error string `json:"error"`
}

func Login(w http.ResponseWriter, r *http.Request) {
	var loginReq models.LoginRequest
	json.NewDecoder(r.Body).Decode(&loginReq)
	userData, _ := models.GetUserByEmail(loginReq.Email)
	if userData.Password != loginReq.Password {
		response := ErrorResponse{
			Valid: false,
			Error: "Invalid password",
		}
		w.WriteHeader(http.StatusOK)
		res, _ := json.Marshal(response)
		w.Write(res)
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
