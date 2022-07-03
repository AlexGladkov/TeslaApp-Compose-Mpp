import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.shape.CircleShape
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
import androidx.compose.ui.draw.clip

enum class CarDetailStep(val number: Int) {
    Car(1), Exterior(2), Interior(3), Autopilot(4)
}

@Composable
fun CarDetailScreen() {
    var currentStep: CarDetailStep by remember { mutableStateOf(CarDetailStep.Car) }

    Column(modifier = Modifier.fillMaxSize().background(Color(0xFFA4B0BC).copy(alpha = 0.2f))) {
        CarDetailHeader(currentStep)
        CarDetailContent(currentStep)
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
private fun ColumnScope.CarDetailContent(carDetailStep: CarDetailStep) {
    when (carDetailStep) {
        CarDetailStep.Car -> CarDetailFirstContent()
        CarDetailStep.Exterior -> CarDetailSecondContent()
        CarDetailStep.Interior -> CarDetailThirdContent()
        CarDetailStep.Autopilot -> CarDetailForthContent()
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
                Text(text = "3.5s", fontSize = 30.sp, color = Color.Black, fontWeight = FontWeight.Medium)
                Spacer(Modifier.height(8.dp))
                Text(text = "0-60 mph", fontSize = 12.sp, color = Color.Black)
            }

            Spacer(Modifier.weight(1f))

            Divider(modifier = Modifier.height(60.dp).width(1.dp), color = Color.Black)

            Spacer(Modifier.weight(1f))

            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(text = "150mph", fontSize = 30.sp, color = Color.Black, fontWeight = FontWeight.Medium)
                Spacer(Modifier.height(8.dp))
                Text(text = "Top speed", fontSize = 12.sp, color = Color.Black)
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
        Spacer(Modifier.height(26.dp))
        Row {
            Column {
                Text(text = "Black and White", fontSize = 24.sp, color = Color.Black)
                Spacer(Modifier.height(8.dp))
                Text(text = "$1,000", fontSize = 20.sp, color = Color(0xFFD01000))
            }

            Spacer(Modifier.weight(1f))

            Column {
                Text(text = "All Black", fontSize = 24.sp, color = Color.Black.copy(alpha = 0.8f))
                Spacer(Modifier.height(8.dp))
                Text(text = "Included", fontSize = 20.sp, color = Color(0xFFA4B0BC))
            }
        }

        Spacer(modifier = Modifier.height(28.dp))

        Row(verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier.clip(CircleShape)
                    .border(BorderStroke(3.dp, color = Color(0xFFD01000)), shape = RoundedCornerShape(56.dp))
                    .background(Color(0xFFF2F5F8)).size(56.dp)
            )

            Spacer(Modifier.width(8.dp))

            Box(modifier = Modifier.clip(CircleShape).background(Color.Black).size(49.dp))
        }

        Spacer(modifier = Modifier.height(20.dp))

        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text("\$58,700", fontSize = 28.sp, color = Color.Black)
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
}

@Composable
fun CarDetailForthStep(onNextClick: () -> Unit) {
    Column(modifier = Modifier.padding(horizontal = 40.dp, vertical = 48.dp)) {
        Text(text = "Autopilot", color = Color(0xFFA4B0BC), fontSize = 20.sp)
        Spacer(Modifier.height(26.dp))
        Row {
            Column {
                Text(text = "Full Self-Driving", fontSize = 24.sp, color = Color.Black)
                Spacer(Modifier.height(8.dp))
                Text(text = "$5,000", fontSize = 20.sp, color = Color(0xFFD01000))
            }

            Spacer(Modifier.weight(1f))

            Column {
                Text(text = "Autopilot", fontSize = 24.sp, color = Color.Black.copy(alpha = 0.8f))
                Spacer(Modifier.height(8.dp))
                Text(text = "$3,000", fontSize = 20.sp, color = Color(0xFFA4B0BC))
            }
        }

        Spacer(Modifier.height(20.dp))

        Text(
            text = "Atomatic driving from highway on-ramp\n" +
                    "to off-ramp including interchanges and overtaking slower cars.",
            fontSize = 16.sp,
            color = Color(0xFF979797)
        )

        Spacer(Modifier.height(20.dp))

        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text("\$60,700", fontSize = 28.sp, color = Color.Black)
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
}

@Composable
fun ColumnScope.CarDetailFirstContent() {
    Column(modifier = Modifier.weight(1f).padding(24.dp)) {
        Text(text = "Select Your Car", fontSize = 18.sp, fontWeight = FontWeight.Light, color = Color(0xFFA4B0BC))
        Box(modifier = Modifier.fillMaxWidth().weight(1f))
        Row {
            Column {
                Text(
                    text = "Performance", color = Color.Black, fontSize = 22.sp,
                    fontWeight = FontWeight.Light
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    text = "$55,000", color = Color(0xFFD01000), fontSize = 18.sp,
                    fontWeight = FontWeight.Light
                )
            }

            Spacer(modifier = Modifier.weight(1f))

            Column {
                Text(
                    text = "Long Range", color = Color.Black.copy(alpha = 0.4f), fontSize = 22.sp,
                    fontWeight = FontWeight.Light
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    text = "$46,700", color = Color(0xFFA4B0BC).copy(alpha = 0.4f), fontSize = 18.sp,
                    fontWeight = FontWeight.Light
                )
            }
        }
    }
}

@Composable
fun CarDetailSecondContent() {

}

@Composable
fun CarDetailThirdContent() {

}

@Composable
fun CarDetailForthContent() {

}