pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Anishkarlekar2002/DevOpsPrac5_Q5.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'set DOCKER_BUILDKIT=0 && docker build -t devops-node-app:latest .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 8080:8080 --name devopscontainer devops-node-app:latest'
            }
        }
    }

    post {
        success {
            echo '🚀 Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
