document.addEventListener('DOMContentLoaded', function () {
    // Initialize all charts
    initBarChart();
    initPieChart();
    initLineChart();
    initRadarChart();
    initAreaChart();
    initBubbleChart();
    initD3Chart();

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // Resize charts when tab changes
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        });
    });

    // Bar Chart
    function initBarChart() {
        const ctx = document.getElementById('barChart').getContext('2d');
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: '2024 Sales',
                    data: [125000, 150000, 180000, 210000],
                    backgroundColor: 'rgba(106, 76, 147, 0.7)',
                    borderColor: 'rgba(106, 76, 147, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return 'ksh ' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return 'ksh ' + context.raw.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        // Update chart when control buttons are clicked
        document.querySelectorAll('.chart-controls .control-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('active')) return;

                document.querySelectorAll('.chart-controls .control-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const dataset = this.getAttribute('data-dataset');
                let newData;

                switch (dataset) {
                    case '2023':
                        newData = [110000, 130000, 145000, 190000];
                        break;
                    case 'comparison':
                        barChart.data.datasets = [
                            {
                                label: '2023',
                                data: [110000, 130000, 145000, 190000],
                                backgroundColor: 'rgba(108, 117, 125, 0.7)',
                                borderColor: 'rgba(108, 117, 125, 1)',
                                borderWidth: 1
                            },
                            {
                                label: '2024',
                                data: [125000, 150000, 180000, 210000],
                                backgroundColor: 'rgba(106, 76, 147, 0.7)',
                                borderColor: 'rgba(106, 76, 147, 1)',
                                borderWidth: 1
                            }
                        ];
                        barChart.update();
                        return;
                    default: // 2024
                        newData = [125000, 150000, 180000, 210000];
                }

                barChart.data.datasets = [{
                    label: dataset === 'comparison' ? 'Comparison' : dataset + ' Sales',
                    data: newData,
                    backgroundColor: 'rgba(106, 76, 147, 0.7)',
                    borderColor: 'rgba(106, 76, 147, 1)',
                    borderWidth: 1
                }];
                barChart.update();
            });
        });
    }

    // Pie Chart
    function initPieChart() {
        const ctx = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Electronics', 'Apparel', 'Home Goods', 'Office Supplies', 'Other'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        'rgba(106, 76, 147, 0.7)',
                        'rgba(78, 205, 196, 0.7)',
                        'rgba(255, 107, 107, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(108, 117, 125, 0.7)'
                    ],
                    borderColor: [
                        'rgba(106, 76, 147, 1)',
                        'rgba(78, 205, 196, 1)',
                        'rgba(255, 107, 107, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(108, 117, 125, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    },
                    legend: {
                        position: 'right',
                    }
                }
            }
        });

        // Update chart when quarter buttons are clicked
        document.querySelectorAll('#pieChart ~ .chart-controls .control-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('active')) return;

                document.querySelectorAll('#pieChart ~ .chart-controls .control-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const quarter = this.getAttribute('data-dataset');
                let newData;

                switch (quarter) {
                    case 'Q2':
                        newData = [30, 30, 15, 20, 5];
                        break;
                    case 'Q3':
                        newData = [40, 20, 25, 10, 5];
                        break;
                    case 'Q4':
                        newData = [45, 25, 15, 10, 5];
                        break;
                    default: // Q1
                        newData = [35, 25, 20, 15, 5];
                }

                pieChart.data.datasets[0].data = newData;
                pieChart.update();
            });
        });
    }

    // Line Chart
    function initLineChart() {
        const ctx = document.getElementById('lineChart').getContext('2d');
        const lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'All Products',
                    data: [85000, 90000, 95000, 100000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000],
                    backgroundColor: 'rgba(106, 76, 147, 0.1)',
                    borderColor: 'rgba(106, 76, 147, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function (value) {
                                return 'ksh ' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return 'ksh ' + context.raw.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        // Update chart when product buttons are clicked
        document.querySelectorAll('#lineChart ~ .chart-controls .control-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('active')) return;

                document.querySelectorAll('#lineChart ~ .chart-controls .control-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const product = this.getAttribute('data-dataset');
                let newData, label;

                switch (product) {
                    case 'electronics':
                        newData = [40000, 42000, 45000, 48000, 52000, 55000, 58000, 60000, 62000, 65000, 68000, 70000];
                        label = 'Electronics';
                        break;
                    case 'apparel':
                        newData = [25000, 28000, 30000, 32000, 35000, 38000, 40000, 42000, 45000, 48000, 50000, 52000];
                        label = 'Apparel';
                        break;
                    default: // all
                        newData = [85000, 90000, 95000, 100000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000];
                        label = 'All Products';
                }

                lineChart.data.datasets[0].data = newData;
                lineChart.data.datasets[0].label = label;
                lineChart.update();
            });
        });
    }

    // Radar Chart
    function initRadarChart() {
        const ctx = document.getElementById('radarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Acquisition', 'Retention', 'Revenue', 'Engagement', 'Loyalty', 'Referral'],
                datasets: [{
                    label: 'Customer A',
                    data: [90, 75, 85, 70, 80, 65],
                    backgroundColor: 'rgba(106, 76, 147, 0.2)',
                    borderColor: 'rgba(106, 76, 147, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(106, 76, 147, 1)'
                }, {
                    label: 'Customer B',
                    data: [70, 85, 75, 90, 65, 80],
                    backgroundColor: 'rgba(78, 205, 196, 0.2)',
                    borderColor: 'rgba(78, 205, 196, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(78, 205, 196, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    // Area Chart
    function initAreaChart() {
        const ctx = document.getElementById('areaChart').getContext('2d');
        const areaChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Market Share',
                    data: [15, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21],
                    backgroundColor: 'rgba(106, 76, 147, 0.2)',
                    borderColor: 'rgba(106, 76, 147, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.raw + '% market share';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function (value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });

        // Update chart when select inputs change
        document.getElementById('trendMetric').addEventListener('change', function () {
            updateAreaChart();
        });

        document.getElementById('timePeriod').addEventListener('change', function () {
            updateAreaChart();
        });

        function updateAreaChart() {
            const metric = document.getElementById('trendMetric').value;
            const period = document.getElementById('timePeriod').value;

            let newData, label;

            switch (metric) {
                case 'growth_rate':
                    label = 'Growth Rate';
                    newData = [1.5, 1.8, 2.0, 2.2, 2.5, 2.7, 3.0, 3.2, 3.5, 3.7, 4.0, 4.2];
                    break;
                case 'customer_acquisition':
                    label = 'Customer Acquisition';
                    newData = [1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750];
                    break;
                default: // market_share
                    label = 'Market Share';
                    newData = [15, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21];
            }

            if (period === '24_months') {
                areaChart.data.labels = Array.from({ length: 24 }, (_, i) => {
                    const month = i % 12;
                    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month] + ' ' + (2022 + Math.floor(i / 12));
                });
                newData = Array.from({ length: 24 }, (_, i) => newData[i % 12] * (1 + Math.floor(i / 12) * 0.2));
            } else if (period === '36_months') {
                areaChart.data.labels = Array.from({ length: 36 }, (_, i) => {
                    const month = i % 12;
                    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month] + ' ' + (2021 + Math.floor(i / 12));
                });
                newData = Array.from({ length: 36 }, (_, i) => newData[i % 12] * (1 + Math.floor(i / 12) * 0.2));
            } else {
                areaChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            }

            areaChart.data.datasets[0].data = newData;
            areaChart.data.datasets[0].label = label;

            if (metric === 'customer_acquisition') {
                areaChart.options.scales.y.ticks.callback = function (value) {
                    return value.toLocaleString();
                };
                areaChart.options.plugins.tooltip.callbacks.label = function (context) {
                    return context.raw.toLocaleString() + ' customers';
                };
            } else if (metric === 'growth_rate') {
                areaChart.options.scales.y.ticks.callback = function (value) {
                    return value + '%';
                };
                areaChart.options.plugins.tooltip.callbacks.label = function (context) {
                    return context.raw + '% growth';
                };
            } else {
                areaChart.options.scales.y.ticks.callback = function (value) {
                    return value + '%';
                };
                areaChart.options.plugins.tooltip.callbacks.label = function (context) {
                    return context.raw + '% market share';
                };
            }

            areaChart.update();
        }
    }

    // Bubble Chart
    function initBubbleChart() {
        const ctx = document.getElementById('bubbleChart').getContext('2d');
        new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Competitor A',
                        data: [
                            { x: 15, y: 80, r: 20 },
                            { x: 18, y: 75, r: 25 },
                            { x: 20, y: 78, r: 30 }
                        ],
                        backgroundColor: 'rgba(255, 107, 107, 0.7)',
                        borderColor: 'rgba(255, 107, 107, 1)'
                    },
                    {
                        label: 'Competitor B',
                        data: [
                            { x: 22, y: 85, r: 25 },
                            { x: 25, y: 82, r: 20 },
                            { x: 28, y: 88, r: 35 }
                        ],
                        backgroundColor: 'rgba(255, 193, 7, 0.7)',
                        borderColor: 'rgba(255, 193, 7, 1)'
                    },
                    {
                        label: 'Your Company',
                        data: [
                            { x: 30, y: 90, r: 40 }
                        ],
                        backgroundColor: 'rgba(78, 205, 196, 0.7)',
                        borderColor: 'rgba(78, 205, 196, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Market Share (%)'
                        },
                        min: 10,
                        max: 35
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Customer Satisfaction (%)'
                        },
                        min: 70,
                        max: 95
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return [
                                    context.dataset.label,
                                    'Market Share: ' + context.raw.x + '%',
                                    'Satisfaction: ' + context.raw.y + '%',
                                    'Revenue: ksh ' + (context.raw.r * 10000).toLocaleString()
                                ];
                            }
                        }
                    }
                }
            }
        });
    }

    // D3.js Chart
    function initD3Chart() {
        const container = document.getElementById('d3Chart');
        const width = container.clientWidth;
        const height = container.clientHeight;
        const margin = { top: 30, right: 30, bottom: 50, left: 60 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select('#d3Chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Sample data
        const data = [
            { age: '18-24', value: 15 },
            { age: '25-34', value: 35 },
            { age: '35-44', value: 25 },
            { age: '45-54', value: 15 },
            { age: '55+', value: 10 }
        ];

        // X scale
        const x = d3.scaleBand()
            .domain(data.map(d => d.age))
            .range([0, innerWidth])
            .padding(0.2);

        // Y scale
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([innerHeight, 0]);

        // X axis
        svg.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(x))
            .append('text')
            .attr('x', innerWidth / 2)
            .attr('y', 35)
            .attr('fill', '#000')
            .attr('text-anchor', 'middle')
            .text('Age Group');

        // Y axis
        svg.append('g')
            .call(d3.axisLeft(y).ticks(5))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -50)
            .attr('x', -innerHeight / 2)
            .attr('fill', '#000')
            .attr('text-anchor', 'middle')
            .text('Percentage (%)');

        // Bars
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.age))
            .attr('y', d => y(d.value))
            .attr('width', x.bandwidth())
            .attr('height', d => innerHeight - y(d.value))
            .attr('fill', 'rgba(106, 76, 147, 0.7)')
            .attr('stroke', 'rgba(106, 76, 147, 1)')
            .attr('stroke-width', 1)
            .on('mouseover', function (event, d) {
                d3.select(this)
                    .attr('fill', 'rgba(78, 205, 196, 0.7)');

                svg.append('text')
                    .attr('class', 'value-label')
                    .attr('x', x(d.age) + x.bandwidth() / 2)
                    .attr('y', y(d.value) - 10)
                    .attr('text-anchor', 'middle')
                    .text(d.value + '%');
            })
            .on('mouseout', function () {
                d3.select(this)
                    .attr('fill', 'rgba(106, 76, 147, 0.7)');

                svg.selectAll('.value-label').remove();
            });

        // Update chart when demographic buttons are clicked
        document.querySelectorAll('#d3Chart ~ .chart-controls .control-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('active')) return;

                document.querySelectorAll('#d3Chart ~ .chart-controls .control-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const dataset = this.getAttribute('data-dataset');
                let newData, xLabel, yLabel;

                switch (dataset) {
                    case 'income':
                        newData = [
                            { category: '<$30k', value: 20 },
                            { category: '$30k-$60k', value: 35 },
                            { category: '$60k-$100k', value: 25 },
                            { category: '>$100k', value: 20 }
                        ];
                        xLabel = 'Income Level';
                        yLabel = 'Percentage (%)';
                        break;
                    case 'region':
                        newData = [
                            { category: 'North', value: 30 },
                            { category: 'South', value: 25 },
                            { category: 'East', value: 20 },
                            { category: 'West', value: 25 }
                        ];
                        xLabel = 'Region';
                        yLabel = 'Percentage (%)';
                        break;
                    default: // age
                        newData = [
                            { category: '18-24', value: 15 },
                            { category: '25-34', value: 35 },
                            { category: '35-44', value: 25 },
                            { category: '45-54', value: 15 },
                            { category: '55+', value: 10 }
                        ];
                        xLabel = 'Age Group';
                        yLabel = 'Percentage (%)';
                }

                // Update scales
                x.domain(newData.map(d => d.category))
                    .range([0, innerWidth])
                    .padding(0.2);

                y.domain([0, d3.max(newData, d => d.value)]);

                // Update axes
                svg.select('.x-axis').remove();
                svg.select('.y-axis').remove();

                svg.append('g')
                    .attr('class', 'x-axis')
                    .attr('transform', `translate(0,${innerHeight})`)
                    .call(d3.axisBottom(x))
                    .append('text')
                    .attr('x', innerWidth / 2)
                    .attr('y', 35)
                    .attr('fill', '#000')
                    .attr('text-anchor', 'middle')
                    .text(xLabel);

                svg.append('g')
                    .attr('class', 'y-axis')
                    .call(d3.axisLeft(y).ticks(5))
                    .append('text')
                    .attr('transform', 'rotate(-90)')
                    .attr('y', -50)
                    .attr('x', -innerHeight / 2)
                    .attr('fill', '#000')
                    .attr('text-anchor', 'middle')
                    .text(yLabel);

                // Update bars
                const bars = svg.selectAll('rect')
                    .data(newData);

                bars.exit().remove();

                bars.enter()
                    .append('rect')
                    .attr('x', d => x(d.category))
                    .attr('width', x.bandwidth())
                    .attr('fill', 'rgba(106, 76, 147, 0.7)')
                    .attr('stroke', 'rgba(106, 76, 147, 1)')
                    .attr('stroke-width', 1)
                    .on('mouseover', function (event, d) {
                        d3.select(this)
                            .attr('fill', 'rgba(78, 205, 196, 0.7)');

                        svg.append('text')
                            .attr('class', 'value-label')
                            .attr('x', x(d.category) + x.bandwidth() / 2)
                            .attr('y', y(d.value) - 10)
                            .attr('text-anchor', 'middle')
                            .text(d.value + (yLabel === 'Percentage (%)' ? '%' : ''));
                    })
                    .on('mouseout', function () {
                        d3.select(this)
                            .attr('fill', 'rgba(106, 76, 147, 0.7)');

                        svg.selectAll('.value-label').remove();
                    })
                    .merge(bars)
                    .transition()
                    .duration(500)
                    .attr('x', d => x(d.category))
                    .attr('y', d => y(d.value))
                    .attr('width', x.bandwidth())
                    .attr('height', d => innerHeight - y(d.value));
            });
        });
    }

    // Resize charts when window resizes
    window.addEventListener('resize', function () {
        // Reinitialize D3 chart to handle responsive resize
        document.getElementById('d3Chart').innerHTML = '';
        if (document.querySelector('#d3Chart ~ .chart-controls .active')) {
            initD3Chart();
        }
    });
});

// Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Update your resize listener
window.addEventListener('resize', debounce(function () {
    // Reinitialize D3 chart to handle responsive resize
    const d3Container = document.getElementById('d3Chart');
    if (d3Container) {
        d3Container.innerHTML = '';
        if (document.querySelector('#d3Chart ~ .chart-controls .active')) {
            initD3Chart();
        }
    }
}, 250));

// Lazy load D3.js only when needed
function loadD3IfNeeded() {
    if (typeof d3 === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://d3js.org/d3.v7.min.js';
        script.onload = initD3Chart;
        document.body.appendChild(script);
    }
}

// Update your tab click handler to load D3 when customer tab is selected
tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.getAttribute('data-tab') === 'customer') {
            loadD3IfNeeded();
        }
        // Rest of your tab handling code...
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');

        // Change icon between bars and times
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    });
});