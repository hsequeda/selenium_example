pipeline {
    agent {
        docker {
            image 'node:14.19-alpine'

        }
    }

    environment {
        CI = "true"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm install -g chromedriver'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
