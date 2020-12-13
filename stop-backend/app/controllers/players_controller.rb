class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players
    end

    def create
        player = Player.new(player_params)
        # byebug
        if player.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
            PlayerSerializer.new(player)).serializable_hash
            ActionCable.server.broadcast 'players_channel', serialized_data
            head :ok
        end 
    end 

    private

    def player_params
        params.require(:player).permit(:id, :initials, :name, :place, :color, :animal, :thing)
    end
end
