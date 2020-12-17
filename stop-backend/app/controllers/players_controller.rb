class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players
    end

    def create
        # byebug
        player = Player.new(player_params)
        # byebug
        # if player.save
        # # byebug

        #     serialized_data = ActiveModelSerializers::Adapter::Json.new(
        #     PlayerSerializer.new(player)
        #     ).serializable_hash
        #     ActionCable.server.broadcast "players_channel", serialized_data
        # #     serialized_data = ActiveModelSerializers::Adapter::Json.new(
        # #     PlayerSerializer.new(player)).serializable_hash
        # #     ActionCable.server.broadcast 'players_channel', serialized_data
        #     head :ok
        # # byebug

        # end 
        # byebug

        if player.save
            render json: player
        end

        # serialized_data = ActiveModelSerializers::Adapter::Json.new(
        #     PlayerSerializer.new(player)
        # ).serializable_hash
        # ActionCable.server.broadcast "players_channel", serialized_data
       
    end 

    private

    def player_params
        params.require(:player).permit(:id, :initials, :name, :place, :color, :animal, :thing)
    end
end
