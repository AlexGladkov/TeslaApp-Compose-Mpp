import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Card
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun CarDetailScreen() {
    Column(modifier = Modifier.fillMaxSize()) {
        CarDetailHeader()
        CarDetailContent()
        CarDetailFooter()
    }
}

@Composable
private fun ColumnScope.CarDetailHeader() {
    Box(modifier = Modifier.height(141.dp).fillMaxWidth().background(Color.White)) {

    }
}

@Composable
private fun ColumnScope.CarDetailContent() {
    Box(modifier = Modifier.weight(1f).fillMaxWidth().background(Color(0xFFA4B0BC))) {

    }
}

@Composable
private fun ColumnScope.CarDetailFooter() {
    Card(
        modifier = Modifier.height(410.dp).fillMaxWidth(), elevation = 0.dp,
        backgroundColor = Color.White,
        shape = RoundedCornerShape(topStart = 35.dp, topEnd = 35.dp)
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            Row(
                modifier = Modifier.padding(start = 75.dp, end = 75.dp, top = 48.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(text = "3.5s", fontSize = 36.sp, color = Color.Black, fontWeight = FontWeight.Medium)
                    Spacer(Modifier.height(8.dp))
                    Text(text = "0-60 mph", fontSize = 14.sp, color = Color.Black)
                }

                Spacer(Modifier.weight(1f))

                Divider(modifier = Modifier.height(60.dp).width(1.dp), color = Color.Black)

                Spacer(Modifier.weight(1f))

                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(text = "150mph", fontSize = 36.sp, color = Color.Black, fontWeight = FontWeight.Medium)
                    Spacer(Modifier.height(8.dp))
                    Text(text = "Top speed", fontSize = 14.sp, color = Color.Black)
                }
            }
        }
    }
}