package middleware

import (
	"log"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	log.Println(cookie)
	if _, err := jwtToken.ParseJwt("%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzg5NjcyMjAuOTgzOTc4LCJpc3MiOiIxIn0.-0-5FwOEHP2d8g7fSrzKr8fbyo6RSenPkRnCyJ-_OMo%22"); err != nil {
		log.Println(err)
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}
	return c.Next()
}
