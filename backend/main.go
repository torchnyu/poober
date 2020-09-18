package main // dont even question it. dont ask the one person who is suppose to know this. :) he's trying his best

import "github.com/gin-gonic/gin" //every import path is a url
import "io/ioutil"

type header struct{ // type nameoftype descriptionoftype
  Id int
  Value string
  Remainder float64
}

func main() {
	r := gin.Default() //creates a gin server (r like router)
	r.GET("/ping", func(c *gin.Context) { // first parameter = path , second = handling creates a handler to handle the get request, takes a pointer to a gin context
    h := header{Id: 5, Value: "a", Remainder:1.2}
  	c.JSON(200, h)
	})
  r.GET("/restrooms", fetchAll)
  r.GET("/parks", getBathrooms)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

}

func getBathrooms(c *gin.Context){
  dat, err := ioutil.ReadFile("./bathroomListings.json")
  if err != nil {
    c.JSON(500, err)
    return
  }
  data := string(dat)
  c.Header("Content-Type","application/json")
  c.String(200, data)
  return
}

func fetchAll(c *gin.Context ){
  type restroom struct{
    Name string
    Address string
    Coordinates string
    Notes string
  }

  arr := make([]restroom, 10)[:0] //empty array list bc go is stupid
  arr = append(arr, restroom{Name:"mcdonalds", Address:"123 cornelia street", Coordinates:"down", Notes:"closed"})
  c.JSON(200, arr)

}

// lowercase is private
