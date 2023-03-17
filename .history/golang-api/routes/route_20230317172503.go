package routes

import (
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/controllers"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/middleware"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	// All routes here ......................

	// Auth Routes ........................
	app.Post("/api/login", controllers.Login)
	app.Post("/api/register", controllers.Register)

	// Middleware for check user is Authenticated or not ...........
	app.Use(middleware.IsAuthenticate)

	app.Get("/api/logout", controllers.Logout)

	// Users Routes .......................
	app.Post("/api/single_user", controllers.SingleUser)
	app.Post("/api/all_users", controllers.AllUsers)
	app.Delete("/api/delete_user", controllers.DeleteUser)

	// Post Routes .....................
	app.Get("/api/all_posts", controllers.ShowAllPosts)
	app.Post("/api/add_post", controllers.AddPost)
	app.Post("/api/create_post", controllers.CreatePost)
	app.Put("/api/update_post", controllers.UpdatePost)
	app.Delete("/api/delete_post/:id", controllers.DeletePost)

	// Image Static Route ..................
	app.Static("/api/upload", "./uploads")
}
