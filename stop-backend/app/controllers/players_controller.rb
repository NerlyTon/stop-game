class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players
    end

    def show
        # byebug
        player = Player.find(params[:id])
        render json: player
    end

    def create
        # byebug
        player = Player.new(player_params)
        # byebug
        if player.save
        # byebug

            serialized_data = ActiveModelSerializers::Adapter::Json.new(
            PlayerSerializer.new(player)
            ).serializable_hash
            ActionCable.server.broadcast 'players_channel', serialized_data
        # #     serialized_data = ActiveModelSerializers::Adapter::Json.new(
        # #     PlayerSerializer.new(player)).serializable_hash
        # #     ActionCable.server.broadcast 'players_channel', serialized_data
        #     head :ok
        # # byebug
        render json: serialized_data
        end 
        # byebug

        # if player.save
        #     render json: player
        # end

        # serialized_data = ActiveModelSerializers::Adapter::Json.new(
        #     PlayerSerializer.new(player)
        # ).serializable_hash
        # ActionCable.server.broadcast "players_channel", serialized_data
       
    end 

    def destroy
        # byebug
        player = Player.find(params[:id])
       
        if player.destroy
            render json: {id: player.id}
        end
    end

    private

    def player_params
        params.require(:player).permit(:id, :initials, :name, :place, :color, :animal, :thing)
    end
end
