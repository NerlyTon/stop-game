class PlayersChannel < ApplicationCable::Channel
  def subscribed
    stream_from "players_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
