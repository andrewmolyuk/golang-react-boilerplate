package main

import (
	"fmt"
	"net/http"
	"runtime"

	"pinarik-services/pkg/logger"
	"pinarik-services/pkg/version"
)

func main() {
	// Create a new logger.
	log, err := logger.New()
	if err != nil {
		panic(err)
	}

	ver := version.New()

	log.Info(
		"startup",
		"GOMAXPROCS",
		runtime.GOMAXPROCS(0),
		"BuildVersion",
		ver.BuildVersion,
		"BuildRef",
		ver.BuildRef,
		"BuildDate",
		ver.BuildDate,
	)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World! %v", ver)
	})

	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
