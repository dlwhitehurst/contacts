#!/bin/bash
# This script exports the database configuration for local
# development. This API will be ultimately slated for Kubernetes
# and therefore ENV variables provide this configuration.

# REMEMBER to source this script not run it because remember the sub-shell
export DB_HOST='localhost'
export DB_USERNAME='root'
export DB_PASSWORD='oursecret'
export DB_SCHEMA='reference'


