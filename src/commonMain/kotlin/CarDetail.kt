import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.runtime.*

enum class CarDetailStep(val number: Int) {
    Car(1), Exterior(2), Interior(3), Autopilot(4)
}

@Composable
fun CarDetailScreen() {
    var currentStep: CarDetailStep by remember { mutableStateOf(CarDetailStep.Car) }

    Column(modifier = Modifier.fillMaxSize().background(Color(0xFFA4B0BC))) {
        CarDetailHeader(currentStep)
        CarDetailContent()
        CarDetailFooter(currentStep) {
            val currentStepPosition = CarDetailStep.values().indexOf(currentStep)
            if (currentStepPosition < CarDetailStep.values().size - 1) {
                currentStep = CarDetailStep.values()[currentStepPosition + 1]
            }
        }
    }
}

@Composable
private fun ColumnScope.CarDetailHeader(currentStep: CarDetailStep) {
    Column(modifier = Modifier.height(141.dp).fillMaxWidth().background(Color.White)) {
        Spacer(Modifier.weight(1f))
        LazyRow(contentPadding = PaddingValues(start = 20.dp, end = 20.dp)) {
            CarDetailStep.values().forEach { step ->
                item {
                    Column(modifier = Modifier.width(IntrinsicSize.Max).padding(start = 12.dp, end = 12.dp)) {
                        val currentStepPosition = CarDetailStep.values().indexOf(currentStep)
                        val arrayStepPosition = CarDetailStep.values().indexOf(step)

                        Text(
                            text = "${step.number} ${step.name}", fontWeight = FontWeight.Medium,
                            fontSize = 18.sp,
                            color = Color.Black.copy(alpha = if (currentStepPosition >= arrayStepPosition) 1.0f else 0.2f)
                        )
                        Spacer(Modifier.height(15.dp))

                        if (currentStepPosition >= arrayStepPosition) {
                            Divider(modifier = Modifier.height(2.dp).fillMaxWidth(), color = Color(0xFFD01000))
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ColumnScope.CarDetailContent() {
    Box(modifier = Modifier.weight(1f).fillMaxWidth().background(Color(0xFFA4B0BC))) {

    }
}

@Composable
private fun ColumnScope.CarDetailFooter(
    carDetailStep: CarDetailStep,
    onNextClick: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(), elevation = 0.dp,
        backgroundColor = Color.White,
        shape = RoundedCornerShape(topStart = 35.dp, topEnd = 35.dp)
    ) {
        when (carDetailStep) {
            CarDetailStep.Car -> CarDetailFirstStep(onNextClick)
            CarDetailStep.Exterior -> CarDetailSecondStep(onNextClick)
            CarDetailStep.Interior -> CarDetailThirdStep(onNextClick)
            CarDetailStep.Autopilot -> CarDetailForthStep(onNextClick)
        }
    }
}

@Composable
fun CarDetailFirstStep(onNextClick: () -> Unit) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
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

        Spacer(Modifier.padding(top = 30.dp))

        Text(
            modifier = Modifier.padding(start = 40.dp, end = 40.dp),
            text = "Tesla All-Wheel Drive has two independent motors. Unlike traditional all-wheel drive systems, " +
                    "these two motors digitally control torque to the front and rear wheels—for far better handling and " +
                    "traction control.", color = Color(0xFF979797), fontSize = 16.sp
        )

        Spacer(Modifier.padding(top = 30.dp))

        Row(
            modifier = Modifier.padding(start = 48.dp, end = 48.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text("\$55,700", fontSize = 28.sp, color = Color.Black)
            Spacer(Modifier.weight(1f))
            Button(
                modifier = Modifier.width(147.dp).height(52.dp),
                colors = ButtonDefaults.buttonColors(
                    backgroundColor = Color.White
                ),
                shape = RoundedCornerShape(size = 64.dp),
                border = BorderStroke(width = 2.dp, color = Color(0xFFD01000)),
                onClick = {
                    onNextClick.invoke()
                }
            ) {
                Text(text = "NEXT", fontSize = 16.sp, fontWeight = FontWeight.Medium)
            }
        }
        Spacer(modifier = Modifier.height(48.dp))
    }
}

@Composable
fun CarDetailSecondStep(onNextClick: () -> Unit) {
    Row(
        modifier = Modifier.padding(48.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text("\$57,700", fontSize = 28.sp, color = Color.Black)
        Spacer(Modifier.weight(1f))
        Button(
            modifier = Modifier.width(147.dp).height(52.dp),
            colors = ButtonDefaults.buttonColors(
                backgroundColor = Color.White
            ),
            shape = RoundedCornerShape(size = 64.dp),
            border = BorderStroke(width = 2.dp, color = Color(0xFFD01000)),
            onClick = {
                onNextClick.invoke()
            }
        ) {
            Text(text = "NEXT", fontSize = 16.sp, fontWeight = FontWeight.Medium)
        }
    }
}

@Composable
fun CarDetailThirdStep(onNextClick: () -> Unit) {
    Column(modifier = Modifier.padding(horizontal = 40.dp, vertical = 48.dp)) {
        Text(text = "Select Interior", color = Color(0xFFA4B0BC), fontSize = 20.sp)
    }
}

@Composable
fun CarDetailForthStep(onNextClick: () -> Unit) {

}