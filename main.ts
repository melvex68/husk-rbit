function mueverobot () {
    if (x >= 120 && x <= 200) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        30,
        robotbit.Motors.M2A,
        30
        )
    }
    if (x > 200) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M2A,
        30
        )
    }
    if (x < 120) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        30,
        robotbit.Motors.M2A,
        150
        )
    }
}
let x = 0
basic.showIcon(IconNames.Duck)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        x = huskylens.readeArrow_index(1, 1, Content2.xTarget)
        mueverobot()
    }
})
