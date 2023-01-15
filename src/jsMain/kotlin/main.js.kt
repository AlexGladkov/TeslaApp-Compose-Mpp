import androidx.compose.ui.window.Window
import kotlinx.browser.document
import org.jetbrains.skiko.wasm.onWasmReady

fun main() {
    onWasmReady {
        Window {
            TeslaApp { width, height ->
                document.getElementById("clip").asDynamic()
                    .style.height = "${height}px"
            }
        }
    }
}
