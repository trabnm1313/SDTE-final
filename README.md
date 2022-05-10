# SDTE-final

## Requirement
  * Node version 16+
  * MongoDB Community Server
  * Docker 4.6.0+

## (Local) Test Application installation steps
  * git clone https://www.github.com/trabnm1313/SDTE-final
  * cd backend
  * npm install
  * node app.js
  * cd ..
  * cd frontend
  * npm install
  * npm run serve

## (Docker) Application installation steps
  * git clone https://www.github.com/trabnm1313/SDTE-final
  * cd SDTE-final
  * docker pull mongo
  * docker run -d -p 27000:27017 mongo
  * docker-compose -f docker-compose-deploy.yml up -d

## Application installation steps with Jenkins pipeline
* Create pipeline within local Jenkins
### Pipeline Configuration (SCM)
  * Git Repository: https://www.github.com/trabnm1313/SDTE-final
  * Branch: "*/main"
  * Jenkins Path: <Default Jenkinsfile Path>
  * Build pipeline and wait
