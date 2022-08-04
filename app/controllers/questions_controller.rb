class QuestionsController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index, :show]
  
    def index
      render json: Question.order(created_at: :desc)
    end
  
    def create
      user = find_user
      question = user.questions.create!(allowed_params)
      render json: question, status: :created
    end
  
    def show
    end
  
    def update
      question = find_question
      question.update!(allowed_params)
      render json: question, status: :created
  
    end
  
    def destroy
      question = find_question
      question.destroy
      head :no_content
    end
  
    private
  
    def find_question
      Question.find(params[:id])
    end
  
    def allowed_params
      params.permit(:title,:description,:categories,:image)
    end
  
end
