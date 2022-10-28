Nue.components.NueChartJS.addTheme('updatingBarChart', 'dark', {
  data: {
    datasets: [{
      backgroundColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary,
      borderColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      backgroundColor: '#3d4145',
      borderColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#c5c8cc'
        }
      }]
    }
  }
})
Nue.components.NueChartJS.addTheme('updatingBarChart', 'default', {
  data: {
    datasets: [{
      backgroundColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary,
      borderColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      backgroundColor: '#e7eaf3',
      borderColor: '#e7eaf3'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#e7eaf3',
          zeroLineColor: '#e7eaf3'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#97a4af'
        }
      }]
    }
  }
})

Nue.components.NueChartJS.addTheme('updatingLineChart', 'dark', {
  data: {
    datasets: [{
      "backgroundColor": [window.nue_config.gulpRGBA(`${window.nue_config.themeAppearance.styles.colors.primary}, .3`), "rgba(255, 255, 255, 0)"]
    },
    {
      "backgroundColor": ["rgba(0, 201, 219, .3)", "rgba(255, 255, 255, 0)"]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    }
  }
})

Nue.components.NueChartJS.addTheme('ecommerce-sales', 'dark', {
  data: {
    datasets: [{
      backgroundColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary,
      borderColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      backgroundColor: '#3d4145',
      borderColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    }
  }
})

Nue.components.NueChartJS.addTheme('ecommerce-overview-1', 'dark', {
  data: {
    datasets: [{
      borderColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBorderColor: window.nue_config.themeAppearance.styles.colors.primary,
      pointBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      borderColor: '#3d4145',
      hoverBorderColor: '#3d4145',
      pointBackgroundColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    },
    tooltips: {
      lineWithLineColor: "#2f3235"
    }
  }
})

Nue.components.NueChartJS.addTheme('ecommerce-overview-2', 'dark', {
  data: {
    datasets: [{
      borderColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBorderColor: window.nue_config.themeAppearance.styles.colors.primary,
      pointBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      borderColor: '#3d4145',
      hoverBorderColor: '#3d4145',
      pointBackgroundColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    },
    tooltips: {
      lineWithLineColor: "#2f3235"
    }
  }
})

Nue.components.NueChartJS.addTheme('ecommerce-overview-3', 'dark', {
  data: {
    datasets: [{
      borderColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBorderColor: window.nue_config.themeAppearance.styles.colors.primary,
      pointBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      borderColor: '#3d4145',
      hoverBorderColor: '#3d4145',
      pointBackgroundColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    },
    tooltips: {
      lineWithLineColor: "#2f3235"
    }
  }
})

Nue.components.NueChartJS.addTheme('ecommerce-overview-4', 'dark', {
  data: {
    datasets: [{
      borderColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBorderColor: window.nue_config.themeAppearance.styles.colors.primary,
      pointBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      borderColor: '#3d4145',
      hoverBorderColor: '#3d4145',
      pointBackgroundColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    },
    tooltips: {
      lineWithLineColor: "#2f3235"
    }
  }
})

Nue.components.NueChartJS.addTheme('ecommerce-customer-details', 'dark', {
  data: {
    datasets: [{
      borderColor: window.nue_config.themeAppearance.styles.colors.primary,
      hoverBorderColor: window.nue_config.themeAppearance.styles.colors.primary,
      pointBackgroundColor: window.nue_config.themeAppearance.styles.colors.primary
    },
    {
      borderColor: '#3d4145',
      hoverBorderColor: '#3d4145',
      pointBackgroundColor: '#3d4145'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    }
  }
})

Nue.components.NueChartJS.addTheme('project', 'dark', {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    }
  }
})

Nue.components.NueChartJS.addTheme('referrals', 'dark', {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    }
  }
})

Nue.components.NueChartJS.addTheme('line-chart-with-grid', 'dark', {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: '#2f3235',
          zeroLineColor: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#2f3235'
        },
        ticks: {
          fontColor: '#c5c8cc',
        }
      }]
    }
  }
})

if (Nue.components.hasOwnProperty('NueChartMatrixJS')) {
  Nue.components.NueChartMatrixJS.addTheme('chartjs-matrix', 'dark', {
    options: {
      scales: {
        xAxes: [{
          ticks: {
            "fontColor": '#c5c8cc'
          }
        }],
        yAxes: [{
          ticks: {
            "fontColor": '#c5c8cc'
          }
        }]
      }
    }
  })
}

Nue.components.NueChartJS.addTheme('doughnutHalfChart', 'dark', {
  data: {
    datasets: [{
      borderColor: '#25282a',
      hoverBorderColor: '#25282a'
    }]
  }
})

Nue.components.NueChartJS.addTheme('updatingDoughnutHalfChart', 'dark', {
  data: {
    datasets: [{
      borderColor: '#25282a',
      hoverBorderColor: '#25282a'
    }]
  }
})

Nue.components.NueChartJS.addTheme('updatingDoughnutChart', 'dark', {
  data: {
    datasets: [{
      backgroundColor: [window.nue_config.themeAppearance.styles.colors.primary, '#00c9db', '#2f3235'],
      borderColor: '#25282a',
      hoverBorderColor: '#25282a'
    }]
  }
})

Nue.components.NueChartJS.addTheme('doughnut-chart', 'dark', {
  data: {
    datasets: [{
      backgroundColor: [window.nue_config.themeAppearance.styles.colors.primary, '#00c9db', '#2f3235'],
      borderColor: '#25282a',
      hoverBorderColor: '#25282a'
    }]
  }
})

Nue.components.NueChartJS.addTheme('strong-line-chart', 'dark', {
  options: {
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#c5c8cc'
        }
      }]
    }
  }
})
