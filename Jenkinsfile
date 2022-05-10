pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                cleanWs()
                git branch: 'dev', url: 'https://github.com/trabnm1313/SDTE-final.git'
            }
        }
        stage('Docker build & deploy with docker-compose'){
            steps{
                bat "docker pull mongo"
                bat "docker run -d -p 27000:27017 mongo"
                bat "docker-compose up -d"
            }
        }
    }
}
