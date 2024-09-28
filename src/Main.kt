import kotlinx.coroutines.*

fun main() = runBlocking { // this: CoroutineScope
    launch(Dispatchers.Unconfined) { // launch a new coroutine and continue
        //delay(1000L) // non-blocking delay for 1 second (default time unit is ms)
        Thread.sleep(1000)
        println("World!") // print after delay
    }
    println("Hello") // main coroutine continues while a previous one is delayed
}
