package main // dont even question it. dont ask the one person who is suppose to know this. :) he's trying his best

import "github.com/gin-gonic/gin" //every import path is a url
import "io/ioutil"
import "encoding/json"
import "os"

var parksBathrooms = func() map[string]bathroom{
  dat, err := ioutil.ReadFile("./bathroomListings.json")
  if err != nil {
    os.Exit(1)
  }
  bathroomMap := make(map[string]bathroom)
  json.Unmarshal([]byte(dat), &bathroomMap)
  return bathroomMap
}()

type header struct{ // type nameoftype descriptionoftype
  Id int
  Value string
  Remainder float64
}

type bathroom struct {
  Accessible bool `json:"accessible"`
  Link string `json:"link"`
  Location string `json:"location"`
  Coordinate string `json:"coordinate"` //JSON is now incompatible; Back to compatible
}

func main() {
	r := gin.Default() //creates a gin server (r like router)
	r.GET("/ping", func(c *gin.Context) { // first parameter = path , second = handling creates a handler to handle the get request, takes a pointer to a gin context
    h := header{Id: 5, Value: "a", Remainder:1.2}
  	c.JSON(200, h)
	})
  r.GET("/restrooms", fetchAll)
  r.GET("/parks", getBathrooms)
  r.POST("/coordinates", postCoordinates)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

}

func getBathrooms(c *gin.Context){
  c.JSON(200, parksBathrooms)
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

func postCoordinates(c *gin.Context){
  currentCoordinates := c.Query("coordinates")
  parkName := c.Query("parkName")
  bathroom := parksBathrooms[parkName]
  bathroom.Coordinate = currentCoordinates
  parksBathrooms[parkName] = bathroom
}

// lowercase is private
// "Playground 52 LII": {
//         "accessible": false, 
//         "link": "/parks/playground-52-lii", 
//         "location": "Kelly Street, St. John's Avenue, Beck Street"
//     }, 
