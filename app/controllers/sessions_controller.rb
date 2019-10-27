class SessionsController < ApplicationController

  def log_out
    sign_out_and_redirect(current_user)
  end
end