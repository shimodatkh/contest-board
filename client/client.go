package main

import (
	"context"
	"flag"
	"log"
	"time"

	pb "github.com/shimodatkh/contest-board/proto"
	"google.golang.org/grpc"
)

var (
	serverAddr = flag.String("server_addr", "localhost:8080", "The server address in the format of host:port")
)

// printFeature gets the feature for the given point.
func printFeature(client pb.ContestBoardClient, point *pb.PutMeasurementReq) {
	log.Printf("[Client] kick PutMeasurement (%d, %f)", point.Id, point.Score)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	feature, err := client.PutMeasurement(ctx, point)
	if err != nil {
		log.Fatalf("%v.GetFeatures(_) = _, %v: ", client, err)
	}
	log.Println(feature)
}

func main() {
	flag.Parse()
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithInsecure())
	opts = append(opts, grpc.WithBlock())
	conn, err := grpc.Dial(*serverAddr, opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()
	client := pb.NewContestBoardClient(conn)

	// Looking for a valid feature
	printFeature(client, &pb.PutMeasurementReq{Id: 123, Score: 10.8})

}
