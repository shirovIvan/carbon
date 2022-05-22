document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('emissions', {
        chart: {
            type: 'column',
                },
        title: {
            text: 'Total air emissions',
            align: 'left',
            style: {
                color: '#333333',
                fontSize: '15px',
            }
        },
        subtitle: {
            text: 'Gross emissions from all sources',
            align: 'left',
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
            }
        },
        xAxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022'],
            text: '',
        },
        yAxis: {
            categories: ['0k', '250k', '500k', '750k', '1000k'],
            title: {
                text: ''
              },
        },
        legend: {
            enabled: false
          },
        credits: {
            text: 't. CO2eq.',
            color: '#AFB1C2',
            position: {
                x: -15,
                y: -260
            },
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
        },
        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#fff',
            borderRadius: 5,
            style: {
                color: '#333333',
            },
            formatter() {
                return `Total air emissions (Steel)<strong> ${this.x}<strong/>`
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                }
            }]
        },
        series: [{
            name: '',
            data: [3, 3, 3, 3.5, 1, 1],
            color: '#9ACC35',
        }]
    });
    Highcharts.chart('sources', {
        chart: {
            type: 'column'
          },
          title: {
            text: 'Sources of emissions',
            align: 'left',
            style: {
                color: '#333333',
                fontSize: '15px',
           }
          },
          credits: {
            text: 't. CO2eq.',
            color: '#AFB1C2',
            position: {
                x: -22,
                y: -420
            },
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
        },
          xAxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022']
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            }
          },
           legend: {
              enabled: false
            },
          tooltip: {
            pointFormat: '<span style="color:{#333333}">{series.name}</span>: <strong>({point.percentage:.0f}%)<br/><strong/>',
            shared: false
          },
          plotOptions: {
            column: {
              stacking: 'percent'
            }
          },
          series: [{
            name: 'Steelmaking',
            data: [1.2, 1.2, 1.2, 1.2, 1.2],
            color: '#FF974A',
          }, {
            name: 'Agglomeration',
            data: [1.2, 1.2, 1.2, 1.2, 1.2],
            color: '#DF5D60',
          }, {
            name: 'Blast furnace shop',
            data: [1.2, 1.2, 1.2, 1.2, 1.2],
            color: '#46BCC2',
          },
          {
            name: 'Coke chemical production',
            data: [1.2, 1.2, 1.2, 1.2, 1.2],
            color: '#9ACC35',
          },
          {
            name: 'Rolling production',
            data: [1.2, 1.2, 1.2, 1.2, 1.2],
            color: '#F3A1E1'
          }]
    });
    Highcharts.chart('released', {
            chart: {
                type: 'column'
              },
              title: {
                text: 'Released products',
                align: 'left',
                style: {
                    color: '#333333',
                    fontSize: '15px',
               }
              },
              credits: {
                text: 't. CO2eq.',
                color: '#AFB1C2',
                position: {
                    x: -22,
                    y: -260
                },
                style: {
                    color: '#AFB1C2',
                    fontSize: '13px',
               }
            },

              xAxis: {
                categories: ['2017', '2018', '2019', '2020', '2021', '2022']
              },
              yAxis: {
                min: 0,
                title: {
                  text: ''
                },
                labels: {
                    format: '{value}k'
                  },
              },
              
               legend: {
                  enabled: false
                },
              tooltip: {
                pointFormat: '<span style="color:{#333333}">{series.name}</span>: <strong>({point.percentage:.0f}%)<strong/><br/>',
                shared: false
              },
              plotOptions: {
                column: {
                  stacking: 'percent'
                }
              },
              series: [{
                name: 'Steel',
                data: [1.2, 1.2, 1.2, 1.2, 1.2],
                color: '#FF974A',
              }, {
                name: 'Cast iron',
                data: [1.9, 1.2, 1.2, 1.2, 1.2],
                color: '#DF5D60',
              }, {
                name: 'Coke',
                data: [0.2, 1.1, 1.2, 1.2, 1.2],
                color: '#46BCC2',
              },
              {
                name: 'Sinter',
                data: [0.7, 2.1, 1.2, 1.2, 1.2],
                color: '#9ACC35',
              },
            ],
            
    });   
    Highcharts.chart('scope', {
        chart: {
            type: 'spline'
          },
          title: {
            text: 'Scope 1 GHG emissions',
            align: 'left',
            style: {
                color: '#333333',
                fontSize: '15px',
           }
          },
          credits: {
            text: 't. CO2eq.',
            color: '#AFB1C2',
            position: {
                x: -22,
                y: -240
            },
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
        },
        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#fff',
            borderRadius: 5,
            style: {
                color: '#333333',
            },
            formatter() {
                return `${this.x}
                <br/>GHG emissions (t. CO2 eq.) <strong>${this.y}k<strong/>`
            }
        },
          xAxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022']
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            },
            labels: {
                format: '{value}k'
              },
          },
          
           legend: {
              enabled: false
            },
          plotOptions: {
            column: {
              stacking: 'percent'
            }
          },
          series: [{
            name: 'Steelmaking',
            data: [30, 30, 30.1, 20, 11.400, 20],
            color: '#46BCC2',
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
          }, 
        ],
        
    });  
    Highcharts.chart('specific', {
        chart: {
            type: 'spline'
          },
          title: {
            text: 'Industry-specific GHG emissions<br/> (STEEL JOINT STOCK COMPANY)',
            align: 'left',
            style: {
                color: '#333333',
                fontSize: '15px',
           }
          },
          credits: {
            text: 't. CO2eq.',
            color: '#AFB1C2',
            position: {
                x: -22,
                y: -240
            },
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
        },
        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#fff',
            borderRadius: 5,
            style: {
                color: '#333333',
            },
            formatter() {
                return `Specific GHG emissions of STEEL<br/> JOINT STOCK COMPANY  <strong>${this.y}k<strong/>`
            }
        },
          xAxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022']
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            },
            labels: {
                format: '{value}k'
              },
          },
          
           legend: {
              enabled: false
            },
          plotOptions: {
            column: {
              stacking: 'percent'
            }
          },
          series: [{
            name: 'Steelmaking',
            data: [12.2, 12.3, 12.1, 10, 8, 10.2],
            color: '#FF974A',
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
          }, 
        ],
        
    });
    
    Highcharts.chart('circle', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Scope 1 GHG emissions, % ',
          align: 'left',
        },
        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#fff',
            borderRadius: 5,
            style: {
                color: '#333333',
            },
            formatter() {
                return `<br/>
                <strong>${this.y}k<strong/>`
            }
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {innerSize: '80%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        credits: {
            text: 't. CO2eq.',
            color: '#AFB1C2',
            position: {
                x: -22,
                y: -465
            },
            style: {
                color: '#AFB1C2',
                fontSize: '13px',
           }
        },
        series: [{
          name: 'CO2',
          colorByPoint: true,
          data: [{
            name: 'CO2 (Carbon dioxide)',
            y: 41.41,
            color: '#46BCC2',
          }, {
            name: 'CH4 (Methan)',
            y: 20.84,
            color: '#9ACC35'
          }, {
            name: '(HFCs) Hydrofluorocarbons',
            y: 14.85,
            color: '#FF974A'
          }, {
            name: 'N2O (Nitrous oxide)',
            y: 10.67,
            color: '#DF5D60'
          }, {
            name: 'NF3 (Nitrogen trifluoride)',
            y: 10.18,
            color: '#F3A1E1'
          }, {
            name: 'SF6 (Sulfur hexafluoride)',
            y: 7.05,
            color: '#B55DDF'
          }]
        }]
      });
    });
document.addEventListener('DOMContentLoaded', () =>{
  Highcharts.chart('actual', {
    chart: {
      renderTo: 'actual',
    },
    credits: {
        text: 't. CO2eq.',
        color: '#AFB1C2',
        position: {
            x: -22,
            y: -420
        },
        style: {
            color: '#AFB1C2',
            fontSize: '13px',
       }
    },
    title: {
      text: 'Plan vs actual analytics of co2-emission',
      align: 'left',
    },
    tooltip: {
      shared: false
    },
    
    xAxis: {
      categories: [
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025'
      ],
      crosshair: false
    },
    yAxis: [{
      title: {
        text: ''
      }
    }, {
      title: {
        text: ''
      },
      opposite: false,
    }],
    series: [{
      type: 'spline',
      name: 'Targets',
      data: [250.2, 200.6, 230.7, 150, 40, 50, 50],
      marker: {
        lineWidth: 2,
        lineColor: '#46BCC2',
        fillColor: 'white'
      },
      tooltip: {
        valueDecimals: 3,
        valueSuffix: ''
      } 
    }, {
      name: 'Emissions',
      type: 'column',
      zIndex: 2,
      color: '#9ACC35',
      data: [200.2, 150.6, 150.9, 86.1, 10.2, 10.8, 10.7],
      tooltip: {
        valueDecimals: 3,
        valueSuffix: ''
      } 
    }]
  });
})