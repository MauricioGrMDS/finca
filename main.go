package main

import (
	configs "fincaBackend/config"
	"fincaBackend/database"
	"fincaBackend/routes"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	configs.InitEnvConfigs()
	database.Connect()
	router := mux.NewRouter()
	routes.RegisterAppStoreRoutes(router)

	fmt.Println("Starting the server")
	err := http.ListenAndServe(":4000", router)
	if err != nil {
		fmt.Println("Could not start the server:", err)
	}
	fmt.Println("Server started. Listening on port 4000")
}
