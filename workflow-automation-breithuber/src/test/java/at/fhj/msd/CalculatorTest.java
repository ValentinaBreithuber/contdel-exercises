package at.fhj.msd;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;

public class CalculatorTest {

    public static Stream<Object[]> provideAdditionData() {
        return Stream.of(new Object[][]{
            {1, 1, 0},
            {5, 3, 2},
            {4, 1, 3},
            {0, 0, 0}
        });
    }

    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "3, 3, 6",
        "100, 200, 300"
    })
    public void testAdd(int a, int b, int expectedResult) {
        Calculator calculator = new Calculator();
        assertEquals(expectedResult, calculator.add(a, b));
    }
    
    @ParameterizedTest
    @MethodSource("provideAdditionData")
    public void testMinus(int a, int b, int expectedResult) {
        Calculator calculator = new Calculator();
        assertEquals(expectedResult, calculator.minus(a, b));
    }
}