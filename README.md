# SDTE-final

## Application installation steps
  * git clone https://www.github.com/trabnm1313/SDTE-final
  * cd SDTE-final
  * docker pull mongo
  * docker run -d -p 27000:27017 mongo
  * docker-compose up -d

## Application installation steps with Jenkins pipeline
### SCM
  * Git Repository: https://www.github.com/trabnm1313/SDTE-final
  * Branch: "*/main"
  * Jenkins Path: <Default Jenkinsfile Path>
  * Build pipeline and wait
