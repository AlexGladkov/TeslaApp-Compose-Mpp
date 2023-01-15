import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

data class TeslaModel(
    val title: String,
    val subtitle: String
)

@Composable
fun Root(
    onSizeChange: ((width: Int, height: Int) -> Unit)?,
    child: @Composable () -> Unit
) {
    Box(modifier = Modifier
        .fillMaxWidth()
        .onGloballyPositioned { coordinates ->
            onSizeChange?.invoke(coordinates.size.width, coordinates.size.height)
        }) {
        child()
    }
}

@Composable
fun TeslaApp(onSizeChange: ((width: Int, height: Int) -> Unit)? = null) {
    Root(onSizeChange) {
    Column {
        Text(
            modifier = Modifier.padding(16.dp),
            text = "Tesla Store",
            fontSize = 28.sp,
            color = Color.Black
        )

        LazyColumn(
            contentPadding = PaddingValues(
                start = 16.dp, end = 16.dp,
                bottom = 48.dp, top = 20.dp
            )
        ) {
            listOf(
                TeslaModel(
                    title = "Tesla Y",
                    subtitle = "The most cheapest car"
                ),
                TeslaModel(
                    title = "Tesla Model 3",
                    subtitle = "The fastest car"
                ),
                TeslaModel(
                    title = "Tesla X",
                    subtitle = "The most beautiful car"
                ),
                TeslaModel(
                    title = "Tesla S",
                    subtitle = "Red"
                ),
                TeslaModel(
                    title = "Tesla Y",
                    subtitle = "The most cheapest car"
                ),
                TeslaModel(
                    title = "Tesla Model 3",
                    subtitle = "The fastest car"
                ),
                TeslaModel(
                    title = "Tesla X",
                    subtitle = "The most beautiful car"
                ),
                TeslaModel(
                    title = "Tesla S",
                    subtitle = "Red"
                ),
                TeslaModel(
                    title = "Tesla Y",
                    subtitle = "The most cheapest car"
                ),
                TeslaModel(
                    title = "Tesla Model 3",
                    subtitle = "The fastest car"
                ),
                TeslaModel(
                    title = "Tesla X",
                    subtitle = "The most beautiful car"
                ),
                TeslaModel(
                    title = "Tesla S",
                    subtitle = "Red"
                ),
            ).forEach { model ->
                item {
                    Column(modifier = Modifier.clickable {
                        println("${model.title} selected")
                    }) {
                        Spacer(Modifier.height(8.dp))
                        Text(model.title, color = Color.Black, fontSize = 20.sp)
                        Spacer(Modifier.height(8.dp))
                        Text(model.subtitle, color = Color.DarkGray, fontSize = 14.sp)
                        Spacer(Modifier.height(8.dp))
                    }
                }
            }
        }
    }
    }
}
