pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/trabnm1313/SDTE-final.git'
            }
        }
        stage('Unit Testing'){
            steps{
                echo "Unit testing"
            }
        }
        stage('Component Test'){
            steps{
               echo "Component Test"
            }
        }
        stage('Packaging'){
            steps{
                echo "Packaging"
            }
        }
        stage('Docker build & deploy with docker-compose'){
            steps{
                bat "docker pull mongo"
                bat "docker run -d -p 27000:27017 mongo"
                bat "docker-compose -f docker-compose-deploy.yml up -d"
            }
        }
        stage('API/UI testing'){
            steps{
                echo "API/UI Testing"
            }
        }
    }
}
