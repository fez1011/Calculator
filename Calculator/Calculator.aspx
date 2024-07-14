<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Calculator.aspx.cs" Inherits="Calculator.Calculator" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
       <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Basic Calculator</title>
    <link href="StyleSheet.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
<div class="calculator">
    <div class="display">
        <input type="text" id="result" disabled>
    </div>
    <div class="buttons">
        <button type="button" class="clear">C</button>
        <button type="button" class="operator">/</button>
        <button type="button" class="number">7</button>
        <button type="button" class="number">8</button>
        <button type="button" class="number">9</button>
        <button type="button" class="operator">*</button>
        <button type="button" class="number">4</button>
        <button type="button" class="number">5</button>
        <button type="button" class="number">6</button>
        <button type="button" class="operator">-</button>
        <button type="button" class="number">1</button>
        <button type="button" class="number">2</button>
        <button type="button" class="number">3</button>
        <button type="button" class="operator">+</button>
        <button type="button" class="number zero">0</button>
        <button type="button" class="decimal">.</button>
        <button type="button" class="equals">=</button>
    </div>
</div>
        <script src="script.js"></script>
    </form>
</body>
</html>
