// Package version provides the application version.
package version

// BuildRef is the git commit hash. Populated by ldflags.
var BuildRef = "unknown"

// BuildDate is the date the binary was built. Populated by ldflags.
var BuildDate = "unknown"

// BuildVersion is the version of the binary. Populated by ldflags.
var BuildVersion = "unknown"

// Version provides the application version.
type Version struct {
	BuildRef     string
	BuildDate    string
	BuildVersion string
}

// New constructs a Version.
func New() *Version {
	return &Version{
		BuildRef:     BuildRef,
		BuildDate:    BuildDate,
		BuildVersion: BuildVersion,
	}
}
