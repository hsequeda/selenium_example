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
                sh 'wget https://chromedriver.storage.googleapis.com/102.0.5005.61/chromedriver_linux64.zip && \
                unzip ./chromedriver_linux64.zip && \
                chmod +x ./chromedriver'
                /* sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb' */
                /* sh 'npm install chromedriver' */
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
