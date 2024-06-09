package routes

import (
	"fincaBackend/controllers"
	"fincaBackend/jwt"
	"net/http"

	"github.com/gorilla/mux"
)

var RegisterAppStoreRoutes = func(router *mux.Router) {
	router.HandleFunc("/login", controllers.Login).Methods("POST")
	router.Handle("/users", jwt.AuthMiddleware(http.HandlerFunc(controllers.GetUsers))).Methods("GET")
	router.Handle("/users", jwt.AuthMiddleware(http.HandlerFunc(controllers.CreateNewUser))).Methods("POST")
}
