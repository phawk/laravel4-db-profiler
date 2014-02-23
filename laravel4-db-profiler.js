(function() {

    var DbProfiler = function() {
        this.initialize.apply(this, arguments);
    };

    DbProfiler.prototype.initialize = function(queries) {
        var selector = ".l4-db-profile",
            html, node, css, style;

        // Generate HTML report
        html = this.buildHtml(queries);

        // Append to the DOM
        node = document.querySelector(selector);
        node.innerHTML = html;

        // Append CSS to the DOM
        style = document.createElement('style');

        css  = selector+ " { width: 90%; margin: 50px auto; border-top: solid 1px #ccc; }";
        css += selector+ " table { width: 100%; }";
        css += selector+ " table th, "+ selector +" table td { padding: 10px; }";
        css += selector+ " table th { border-bottom: solid 1px #333 }";
        css += selector+ " table td { border-bottom: solid 1px #e7e7e7 }";

        style.innerHTML = css;

        node.appendChild(style);
    };

    DbProfiler.prototype.buildHtml = function(queries) {
        var html = "",
            total_time = 0;

        queries.forEach(function(query) {
            total_time += query.time;
            html += this.getRow(query);
        }, this);

        html = "<h2>Laravel 4 DB Profiler &ndash; <strong>"+ queries.length +"</strong> Queries, taking <strong>"+ parseFloat(total_time / 1000).toFixed(3) +"</strong> seconds</h4><table><thead><tr><th>Time (ms)</th><th>SQL</th><th>Bindings</th></thead><tbody>" + html;

        html += "</tbody></table>";

        return html;
    };

    DbProfiler.prototype.getRow = function(query) {
        return "<tr><td>"+ query.time +"</td><td>"+ query.query +"</td><td>"+ JSON.stringify(query.bindings) +"</td></tr>";
    };

    this.DbProfiler = DbProfiler;

}).call(this);



// var queries = ,
//     total = 0;
// console.log('/****************************** Database Queries ******************************/');
// console.log(' ');
// $.each(queries, function(id, query) {
//     total++;
//     console.log('   ' + query.time + ' | ' + query.query + ' | ' + JSON.stringify(query.bindings));
// });
// console.log(' ');
// console.log('/****************************** End Queries ('+ total +') ***********************************/');
