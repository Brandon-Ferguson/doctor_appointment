class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :update, :users, :destroy]

  def index
    render json: Doctor.all
  end

  def show
    render json: @doctor 
  end

  def users
    render json: @doctor.users
  end

  def create
    @doctor = Doctor.create(doctor_params)
    if @doctor.save
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor.destroy
    render json: { message: 'Doctor Deleted' }
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    def doctor_params
      params.require(:doctor).permit(:doctor_fname, :doctor_lname, :specialty)
    end
end
