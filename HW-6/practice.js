<!DOCTYPE html> <!--Hidden stuff-->
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <!-- CSS -->
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <p id="hideThis">Make this disappear!</p>       <!-- What to hide -->
    <button id="btn1">Click Me!</button>            <!-- Button to trigger hide -->

    <!-- Javascript -->
    <script type="text/javascript">
        const p = document.getElementById('hideThis');
        const btn = document.getElementById('btn1');

        <!-- Add hidden css style to hideThis ID -->
        function hideClass() {
            hideThis.className = 'hidden';
        }

        btn.addEventListener('click', hideClass);   <!-- Execute hideClass on click -->
    </script>
</body>
</html>
