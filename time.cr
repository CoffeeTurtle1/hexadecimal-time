while 1
    curTime = Time.utc_now  # Get the current time
    hexTime = ((curTime.hour * 60 + curTime.minute) / 5.625).round(0).to_i.to_s(16) # Work out the hexadecimal time
    puts "The time is: 0x" + hexTime # Display it on the screen
    sleep 5.seconds # Wait for five seconds
end
