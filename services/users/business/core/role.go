// Package core contains the core business logic for the user service.
package core

import "fmt"

// Set of possible roles for a user.
var (
	RoleAdmin = Role{"ADMIN"}
	RoleUser  = Role{"USER"}
)

// Set of known roles.
var roles = map[string]Role{
	RoleAdmin.name: RoleAdmin,
	RoleUser.name:  RoleUser,
}

// Role represents a role in the system.
type Role struct {
	name string
}

// Name returns the name of the role.
func (r *Role) Name() string {
	return r.name
}

// New constructs a Role.
func New(value string) (*Role, error) {
	role, exists := roles[value]
	if !exists {
		return &Role{}, fmt.Errorf("invalid role %q", value)
	}

	return &role, nil
}
