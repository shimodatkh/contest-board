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
	serverAddr = flag.String("server_addr", "localhost:9090", "The server address in the format of host:port")
)

func putMeasure(client pb.ContestBoardServiceClient, measure *pb.PutMeasurementReq) {
	log.Printf("[Client] kick PutMeasurement (%d, %f)", measure.Id, measure.Score)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	feature, err := client.PutMeasurement(ctx, measure)
	if err != nil {
		log.Fatalf("%v.PutMeasurement(_) = _, %v: ", client, err)
	}
	log.Println(feature)
}

func getMeasures(client pb.ContestBoardServiceClient, req *pb.GetMeasurementsReq) {
	log.Printf("[Client] kick GetMeasurements")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	measures, err := client.GetMeasurements(ctx, req)
	if err != nil {
		log.Fatalf("%v.GetMeasurements(_) = _, %v: ", client, err)
	}
	log.Println(len(measures.Measurements))
	log.Println(measures)
}

func main() {
	flag.Parse()
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithInsecure())
	opts = append(opts, grpc.WithBlock())
	log.Printf("dial to %s", *serverAddr)
	conn, err := grpc.Dial(*serverAddr, opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()
	client := pb.NewContestBoardServiceClient(conn)

	// Looking for a valid feature
	putMeasure(client, &pb.PutMeasurementReq{Id: 123, Score: 10.8})
	putMeasure(client, &pb.PutMeasurementReq{Id: 124, Score: 12.8})
	putMeasure(client, &pb.PutMeasurementReq{Id: 125, Score: 210.8})
	putMeasure(client, &pb.PutMeasurementReq{Id: 126, Score: 12410.8})

	getMeasures(client, &pb.GetMeasurementsReq{})

}
