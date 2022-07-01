import androidx.compose.ui.window.Window
import platform.AppKit.NSApp
import platform.AppKit.NSApplication

fun main() {
    NSApplication.sharedApplication()
    Window("TeslaApp") {
        TeslaApp()
    }
    NSApp?.run()
}