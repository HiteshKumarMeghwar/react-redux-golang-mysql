package routes

import (
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	// All routes here ......................

	// Login Routes ........................
	app.Post("/api/login", controllers.Login)
	app.Post("/api/register", controllers.Register)

	// Users Routes .......................
	app.Get("/api/all_users", controllers.AllUsers)
	app.Post("/api/create_user", controllers.CreateUser)
	app.Delete("/api/delete_user", controllers.DeleteUser)

	// Post Routes .....................
	app.Get("/api/", controllers.ShowAllPosts)
	app.Post("/api/create_post", controllers.CreatePost)
	app.Put("/api/update_post", controllers.UpdatePost)
	app.Delete("/api/delete_post", controllers.DeletePost)
}
