class VideosController < ApplicationController

def index
  @videos = Videos.all
end

def show
  @video = Video.find(params[:id])
end

def video_params
  params.require(:video).permit(:title, :description)
end

end
