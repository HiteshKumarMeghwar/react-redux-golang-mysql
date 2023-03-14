package routes

import (
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	// All routes here ......................
	app.Get("/", controllers.ShowAllPosts)
	app.Post("/create_post", controllers.CreatePost)
	app.Put("/UpdatePost", controllers.UpdatePost)
	app.Delete("/DeletePost", controllers.DeletePost)
}
