// Package logger provides a simple logging interface.
package logger

import (
	"log/slog"
)

// Logger provides a simple logging interface.
type Logger struct {
	logger slog.Logger
}

// New constructs a Logger.
func New() (*Logger, error) {
	logger := &Logger{
		logger: *slog.Default(),
	}
	return logger, nil
}

func (log *Logger) Debug(msg string, args ...any) {
	log.logger.Debug(msg, args...)
}

func (log *Logger) Info(msg string, args ...any) {
	log.logger.Info(msg, args...)
}

func (log *Logger) Warn(msg string, args ...any) {
	log.logger.Warn(msg, args...)
}

func (log *Logger) Error(msg string, args ...any) {
	log.logger.Error(msg, args...)
}
