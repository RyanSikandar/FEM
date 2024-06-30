package com.moodtracker

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this)  // Show the splash screen
    super.onCreate(savedInstanceState)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "MoodTracker"
}
