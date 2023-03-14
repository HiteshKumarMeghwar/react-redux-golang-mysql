package routes

import (
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	// All routes here ......................
	app.Get("/api/", controllers.ShowAllPosts)
	app.Post("/api/create_post", controllers.CreatePost)
	app.Put("/api/update_post", controllers.UpdatePost)
	app.Delete("/api/delete_post", controllers.DeletePost)
}
