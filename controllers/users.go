package controllers

import (
	"encoding/json"
	"fincaBackend/models"
	"fincaBackend/utils"
	"fmt"
	"net/http"
)

var NewUser models.User

func GetUsers(w http.ResponseWriter, r *http.Request) {
	newUsers := models.GetAllUsers()
	models.GetUserByEmail("mgranadosmunoz@gmail.com")
	res, _ := json.Marshal(newUsers)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func CreateNewUser(w http.ResponseWriter, r *http.Request) {
	CreateUser := &models.User{}
	utils.ParseBody(r, CreateUser)
	response, err := CreateUser.CreateUser()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(w, err)
		return
	}

	res, _ := json.Marshal(response)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
