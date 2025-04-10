export interface DecisionNode {
  question: string;
  options: {
    [key: string]: DecisionNode | string;
  };
}

export const decisionTree: DecisionNode = {

question: "¿Qué dolor o síntoma tienes?",
  options: {
    //fiebre
    "Fiebre": {
  question: "¿Tienes alguno de los siguientes síntomas: fiebre?",
  options: {
    Sí: {
      question: "¿Tienes tos?",
      options: {
        Sí: {
          question: "¿Es tos seca?",
          options: {
            Sí: {
              question: "¿Tienes dificultad para respirar?",
              options: {
                Sí: {
                  question: "¿Tienes algún dolor en el pecho?",
                  options: {
                    Sí: {
                      question: "¿Tienes escalofrío?",
                      options: {
                        Sí: "Podrías tener neumonía.",
                        No: "Podrías tener bronquitis."
                      }
                    },
                    No: "Podrías tener asma."
                  }
                },
                No: "Podrías tener gripa o influenza."
              }
            },
            No: {
              question: "¿Tienes tos con flema?",
              options: {
                Sí: {
                  question: "¿La flema es amarilla o verde?",
                  options: {
                    Sí: {
                      question: "¿Tu fiebre es prolongada?",
                      options: {
                        Sí: "Podrías tener neumonía.",
                        No: "Podrías tener bronquitis."
                      }
                    },
                    No: "Podrías tener gripa o influenza."
                  }
                },
                No: {
                  question: "¿Tienes tos con sangre?",
                  options: {
                    Sí: {
                      question: "¿Has perdido peso?",
                      options: {
                        Sí: "Podrías tener tuberculosis.",
                        No: {
                          question: "¿Tienes escalofríos?",
                          options: {
                            Sí: "Podrías tener neumonía.",
                            No: {
                              question: "¿Tienes dolor al toser?",
                              options: {
                                Sí: "Podrías tener tuberculosis.",
                                No: "Podrías tener bronquitis."
                              }
                            }
                          }
                        }
                      }
                    },
                    No: {
                      question: "¿Tienes dolor de cabeza?",
                      options: {
                        Sí: {
                          question: "¿Tienes náuseas?",
                          options: {
                            Sí: {
                              question: "¿Tienes sensibilidad a la luz?",
                              options: {
                                Sí: "Podrías tener migraña.",
                                No: "Podrías tener meningitis."
                              }
                            },
                            No: {
                              question: "¿Tienes brotes en la piel?",
                              options: {
                                Sí: "Podrías tener dengue.",
                                No: {
                                  question: "¿Tienes convulsiones?",
                                  options: {
                                    Sí: "Podrías tener meningitis.",
                                    No: {
                                      question: "¿Tienes dolor en la parte baja del abdomen?",
                                      options: {
                                        Sí: "Podrías tener infección urinaria.",
                                        No: "Podrías tener influenza."
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        No: {
                          question: "¿Tienes dolor muscular?",
                          options: {
                            Sí: {
                              question: "¿Tienes brotes en la piel?",
                              options: {
                                Sí: {
                                  question: "¿Tienes inflamación?",
                                  options: {
                                    Sí: "Podrías tener dengue.",
                                    No: "Podrías tener una alergia."
                                  }
                                },
                                No: {
                                  question: "¿Tienes dificultad para respirar?",
                                  options: {
                                    Sí: "Podrías tener bronquitis.",
                                    No: {
                                      question: "¿Tienes ardor en la boca del estómago?",
                                      options: {
                                        Sí: "Podrías tener gastritis.",
                                        No: "Podrías tener influenza."
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            No: {
                              question: "¿Tienes sudoración excesiva?",
                              options: {
                                Sí: {
                                  question: "¿Tienes tos persistente?",
                                  options: {
                                    Sí: {
                                      question: "¿Tienes tos con sangre?",
                                      options: {
                                        Sí: "Podrías tener tuberculosis.",
                                        No: "Podrías tener neumonía."
                                      }
                                    },
                                    No: {
                                      question: "¿Tienes sudoración y escalofríos?",
                                      options: {
                                        Sí: "Podrías tener neumonía.",
                                        No: "Podrías tener influenza."
                                      }
                                    }
                                  }
                                },
                                No: {
                                  question: "¿Tienes fatiga?",
                                  options: {
                                    Sí: {
                                      question: "¿Tienes tos persistente?",
                                      options: {
                                        Sí: {
                                          question: "¿Tienes tos con sangre?",
                                          options: {
                                            Sí: "Podrías tener tuberculosis.",
                                            No: "Podrías tener neumonía."
                                          }
                                        },
                                        No: {
                                          question: "¿Tienes dolor muscular intenso?",
                                          options: {
                                            Sí: {
                                              question: "¿Tienes brotes en la piel?",
                                              options: {
                                                Sí: {
                                                  question: "¿Tienes inflamación?",
                                                  options: {
                                                    Sí: "Podrías tener dengue.",
                                                    No: "Podrías tener una alergia."
                                                  }
                                                },
                                                No: "Podrías tener influenza."
                                              }
                                            },
                                            No: {
                                              question: "¿Tienes dificultad para respirar e hinchazón?",
                                              options: {
                                                Sí: "Podrías tener insuficiencia cardiaca.",
                                                No: "Podrías tener influenza."
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    No: "Podrías tener influenza."
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        No: {
          question: "¿Tienes dolor de cabeza?",
          options: {
            Sí: {
              question: "¿Tienes náuseas?",
              options: {
                Sí: {
                  question: "¿Tienes sensibilidad a la luz?",
                  options: {
                    Sí: "Podrías tener migraña.",
                    No: "Podrías tener meningitis."
                  }
                },
                No: {
                  question: "¿Tienes brotes en la piel?",
                  options: {
                    Sí: "Podrías tener dengue.",
                    No: {
                      question: "¿Tienes convulsiones?",
                      options: {
                        Sí: "Podrías tener meningitis.",
                        No: {
                          question: "¿Tienes dolor en la parte baja del abdomen?",
                          options: {
                            Sí: "Podrías tener infección urinaria.",
                            No: "Podrías tener influenza."
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            No: {
              question: "¿Tienes dolor muscular?",
              options: {
                Sí: {
                  question: "¿Tienes brotes en la piel?",
                  options: {
                    Sí: {
                      question: "¿Tienes inflamación?",
                      options: {
                        Sí: "Podrías tener dengue.",
                        No: "Podrías tener una alergia."
                      },
                    },
                    No: {
                      question: "¿Tienes dificultad para respirar?",
                      options: {
                        Sí: "Podrías tener bronquitis.",
                        No: {
                          question: "¿Tienes ardor en la boca del estómago?",
                          options: {
                            Sí: "Podrías tener gastritis.",
                            No: "Podrías tener influenza."
                          },
                        },
                      },
                    },
                  },
                },
                No: {
                  question: "¿Tienes sudoración excesiva?",
                  options: {
                    Sí: {
                      question: "¿Tienes tos persistente?",
                      options: {
                        Sí: {
                          question: "¿Tienes tos con sangre?",
                          options: {
                            Sí: "Podrías tener tuberculosis.",
                            No: "Podrías tener neumonía."
                          },
                        },
                        No: {
                          question: "¿Tienes sudoración y escalofríos?",
                          options: {
                            Sí: "Podrías tener neumonía.",
                            No: "Podrías tener influenza."
                          },
                        },
                      },
                    },
                    No: {
                      question: "¿Tienes fatiga?",
                      options: {
                        Sí: {
                          question: "¿Tienes tos persistente?",
                          options: {
                            Sí: {
                              question: "¿Tienes tos con sangre?",
                              options: {
                                Sí: "Podrías tener tuberculosis.",
                                No: "Podrías tener neumonía."
                              }
                            },
                            No: {
                              question: "¿Tienes dolor muscular intenso?",
                              options: {
                                Sí: {
                                  question: "¿Tienes brotes en la piel?",
                                  options: {
                                    Sí: {
                                      question: "¿Tienes inflamación?",
                                      options: {
                                        Sí: "Podrías tener dengue.",
                                        No: "Podrías tener una alergia."
                                      },
                                    },
                                    No: "Podrías tener influenza."
                                  },
                                },
                                No: {
                                  question: "¿Tienes dificultad para respirar e hinchazón?",
                                  options: {
                                    Sí: "Podrías tener insuficiencia cardiaca.",
                                    No: "Podrías tener influenza."
                                  },
                                },
                              },
                            },
                          },
                        },
                        No: "Podrías tener influenza."
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    No: "No se detecta un síntoma principal para continuar el diagnóstico."
  },
    },

//Dificultad para respirar
    "Dolor de pecho": {
      question: "¿Tienes alguno de los siguientes síntomas: dificultad para respirar?",
      options: {
        Sí: {
          question: "¿Tienes dolor al pecho?",
          options: {
            Sí: {
              question: "¿Te duele el brazo izquierdo o la mandíbula?",
              options: {
                Sí: "Podrías tener un pre-infarto.",
                No: {
                  question: "¿Te duele hacer esfuerzo?",
                  options: {
                    Sí: "Podrías tener insuficiencia cardiaca.",
                    No: {
                      question: "¿Tienes tos persistente?",
                      options: {
                        Sí: {
                          question: "¿Tienes fiebre?",
                          options: {
                            Sí: "Podrías tener neumonía.",
                            No: "Podrías tener bronquitis.",
                          }
                        },
                        No: {
                          question: "¿Tienes latidos irregulares?",
                          options: {
                            Sí: "Podrías tener arritmia cardiaca.",
                            No: "Podrías tener asma.",
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            No: {
              question: "¿Tienes fatiga?",
              options: {
                Sí: {
                  question: "¿Hinchazón de extremidades?",
                  options: {
                    Sí: {
                      question: "¿Tienes insuficiencia cardiaca?",
                      options: {
                        Sí: "Podrías tener insuficiencia cardiaca.",
                        No: {
                          question: "¿Tienes sudoración nocturna?",
                          options: {
                            Sí: {
                              question: "¿Tienes tos persistente?",
                              options: {
                                Sí: "Podrías tener tuberculosis.",
                                No: "Podrías tener neumonía."
                              }
                            },
                            No: {
                              question: "¿Tienes antecedentes de ansiedad o estrés?",
                              options: {
                                Sí: "Podrías tener un ataque de pánico.",
                                No: "Podrías tener asma."
                              }
                            }
                          }
                        }
                      }
                    },
                    No: {
                      question: "¿Tienes sudoración nocturna?",
                      options: {
                        Sí: {
                          question: "¿Tienes tos persistente?",
                          options: {
                            Sí: "Podrías tener tuberculosis.",
                            No: "Podrías tener neumonía.",
                          }
                        },
                        No: {
                          question: "¿Tienes antecedentes de ansiedad o estrés?",
                          options: {
                            Sí: "Podrías tener un ataque de pánico.",
                            No: "Podrías tener asma."
                          }
                        }
                      }
                    }
                  }
                },
                No: {
                  question: "¿Tienes tos?",
                  options: {
                    Sí: {
                      question: "¿Tos seca?",
                      options: {
                        Sí: {
                          question: "¿Tienes asma?",
                          options: {
                            Sí: "Podrías tener asma.",
                            No: {
                              question: "¿Tos con flema?",
                              options: {
                                Sí: {
                                  question: "¿Tienes fiebre?",
                                  options: {
                                    Sí: "Podrías tener neumonía.",
                                    No: "Podrías tener bronquitis."
                                  }
                                },
                                No: {
                                  question: "¿Tos con sangre?",
                                  options: {
                                    Sí: "Podrías tener tuberculosis.",
                                    No: "Podrías tener insuficiencia cardiaca."
                                  }
                                }
                              }
                            }
                          }
                        },
                        No: {
                          question: "¿Tos con flema?",
                          options: {
                            Sí: {
                              question: "¿Tienes fiebre?",
                              options: {
                                Sí: "Podrías tener neumonía.",
                                No: "Podrías tener bronquitis."
                              }
                            },
                            No: {
                              question: "¿Tos con sangre?",
                              options: {
                                Sí: "Podrías tener tuberculosis.",
                                No: "Podrías tener insuficiencia cardiaca."
                              }
                            }
                          }
                        }
                      }
                    },
                    No: {
                      question: "¿Mareo o debilidad?",
                      options: {
                        Sí: {
                          question: "¿Tienes presión arterial alta?",
                          options: {
                            Sí: "Podrías tener hipertensión arterial.",
                            No: {
                              question: "¿Tienes palpitaciones irregulares?",
                              options: {
                                Sí: "Podrías tener arritmia cardiaca.",
                                No: {
                                  question: "¿Tienes sudoración excesiva y temblores?",
                                  options: {
                                    Sí: "Podrías tener un bajón de azúcar.",
                                    No: "Podrías tener un ataque de pánico."
                                  }
                                }
                              }
                            }
                          }
                        },
                        No: "Consulta con un especialista para una evaluación más detallada."
                      }
                    }
                  }
                }
              }
            }
          }
        },
        No: "No hay dificultad respiratoria reportada. Revisa otros síntomas o consulta con un especialista."
      }
    },

    //Dolor en el pecho
    "Dolor en el pecho": {
      question: "¿Tienes alguno de los siguientes síntomas: dolor en el pecho?",
  options: {
    Sí: {
      question: "¿Tienes mareo o debilidad?",
      options: {
        Sí: {
          question: "¿El dolor lo tienes en el brazo izquierdo?",
          options: {
            Sí: "Podrías tener un pre-infarto.",
            No: {
              question: "¿Tienes palpitaciones irregulares?",
              options: {
                Sí: "Podrías tener arritmia cardiaca.",
                No: {
                  question: "¿Tienes sudoración excesiva?",
                  options: {
                    Sí: "Podrías tener un ataque de pánico.",
                    No: {
                      question: "¿Tienes temblores?",
                      options: {
                        Sí: "Podrías tener un bajón de azúcar.",
                        No: "Podrías tener hipertensión."
                      }
                    }
                  }
                }
              }
            }
          }
        },
        No: {
          question: "¿Tienes náuseas?",
          options: {
            Sí: {
              question: "¿El dolor de pecho es insoportable?",
              options: {
                Sí: "Podrías tener un pre-infarto.",
                No: {
                  question: "¿Tienes reflujo al comer?",
                  options: {
                    Sí: "Podrías tener gastritis.",
                    No: "Podrías tener hipertensión arterial."
                  }
                }
              }
            },
            No: "Consulta con un médico para una evaluación más precisa."
          }
        }
      }
    },
    No: "No hay dolor en el pecho reportado. Evalúa otros síntomas o consulta con un profesional de salud."
  }
    },
    //Dolor abdominal
    "Dolor abdominal":{
      question: "¿Tienes alguno de los siguientes síntomas: dolor abdominal?",
       options: {
       Sí: {
      question: "¿Tienes náuseas?",
      options: {
        Sí: {
          question: "¿Tienes acidez o ardor?",
          options: {
            Sí: "Podrías tener gastritis.",
            No: {
              question: "¿El dolor es al lado derecho del abdomen?",
              options: {
                Sí: "Podrías tener apendicitis.",
                No: {
                  question: "¿Tienes fiebre y dolor en la parte baja?",
                  options: {
                    Sí: "Podrías tener una infección urinaria.",
                    No: "Podrías tener cólicos renales."
                  }
                }
              }
            }
          }
        },
        No: {
          question: "¿Tienes dolor lumbar?",
          options: {
            Sí: {
              question: "¿El dolor es insoportable?",
              options: {
                Sí: "Podrías tener cólicos renales.",
                No: {
                  question: "¿Tienes fiebre y ardor?",
                  options: {
                    Sí: "Podrías tener una infección urinaria.",
                    No: "Podrías estar sufriendo un maltrato físico o emocional."
                  }
                }
              }
            },
            No: "Consulta con un profesional de salud para una evaluación más precisa."
          }
        }
      }
    },
    No: "No hay dolor abdominal reportado. Evalúa otros síntomas o consulta con un profesional de salud."
  }
    },
    //Mareo o debilidad
    "Mareo o debilidad":{
      question: "¿Tienes alguno de los siguientes síntomas: mareo o debilidad?",
  options: {
    Sí: {
      question: "¿Tienes dolor de pecho?",
      options: {
        Sí: {
          question: "¿El dolor es intenso?",
          options: {
            Sí: "Podrías tener un preinfarto.",
            No: {
              question: "¿Sientes palpitaciones irregulares?",
              options: {
                Sí: "Podrías tener arritmia cardiaca.",
                No: {
                  question: "¿Tienes sudoración excesiva?",
                  options: {
                    Sí: "Podrías estar teniendo un ataque de pánico.",
                    No: {
                      question: "¿Tienes temblores?",
                      options: {
                        Sí: "Podrías tener un bajón de azúcar.",
                        No: "Podrías tener hipertensión."
                      }
                    }
                  }
                }
              }
            }
          }
        },
        No: {
          question: "¿Tuviste pérdida de conciencia?",
          options: {
            Sí: {
              question: "¿Fue repentino?",
              options: {
                Sí: "Podrías tener arritmia cardiaca.",
                No: {
                  question: "¿Antes te dolió el pecho?",
                  options: {
                    Sí: "Podrías haber tenido un preinfarto.",
                    No: {
                      question: "¿Estuviste sometido a estrés?",
                      options: {
                        Sí: "Podrías estar teniendo un ataque de pánico.",
                        No: {
                          question: "¿Tienes sudoración excesiva?",
                          options: {
                            Sí: "Podrías tener un bajón de azúcar.",
                            No: "Podrías tener hipertensión."
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            No: {
              question: "¿Tienes sudoración excesiva?",
              options: {
                Sí: {
                  question: "¿Tienes dolor de pecho?",
                  options: {
                    Sí: "Podrías tener un preinfarto.",
                    No: {
                      question: "¿Tienes sensación de desmayo?",
                      options: {
                        Sí: "Podrías tener una arritmia cardiaca.",
                        No: {
                          question: "¿Sientes debilidad?",
                          options: {
                            Sí: "Podrías tener un bajón de azúcar.",
                            No: "Podrías tener hipertensión."
                          }
                        }
                      }
                    }
                  }
                },
                No: "Consulta con un profesional de salud para una evaluación más precisa."
              }
            }
          }
        }
      }
    },
    No: "No hay mareo ni debilidad reportados. Evalúa otros síntomas o consulta con un profesional de salud."
  }
    },
    //Nauseas o vomito
    "nauseas o vomito":{
      question: "¿Tienes alguno de los siguientes síntomas: náuseas o vómito?",
  options: {
    Sí: {
      question: "¿Tienes dolor abdominal?",
      options: {
        Sí: {
          question: "¿El dolor abdominal es insoportable?",
          options: {
            Sí: "Podrías tener apendicitis.",
            No: {
              question: "¿El dolor está acompañado de ardor y acidez?",
              options: {
                Sí: "Podrías tener gastritis.",
                No: {
                  question: "¿Ha orinado con sangre?",
                  options: {
                    Sí: {
                      question: "¿El dolor está presente en la parte baja de la espalda?",
                      options: {
                        Sí: "Podrías tener cólico renal.",
                        No: "Podrías tener una infección urinaria."
                      }
                    },
                    No: "Podrías tener un problema digestivo. Se recomienda realizar exámenes más a fondo."
                  }
                }
              }
            }
          }
        },
        No: {
          question: "¿Tienes dolor de cabeza?",
          options: {
            Sí: {
              question: "¿El dolor está acompañado de sensibilidad a la luz o ruido?",
              options: {
                Sí: "Podrías tener migraña.",
                No: {
                  question: "¿Tienes fiebre y rigidez en el cuello?",
                  options: {
                    Sí: "Podrías tener meningitis.",
                    No: {
                      question: "¿Últimamente te has golpeado la cabeza?",
                      options: {
                        Sí: "Podrías tener una conmoción cerebral. Requiere vigilancia de síntomas por 24 horas.",
                        No: {
                          question: "¿Has tenido visión borrosa o inestabilidad?",
                          options: {
                            Sí: {
                              question: "¿Tienes dificultad para hablar o sientes un lado del cuerpo entumecido?",
                              options: {
                                Sí: "Podrías estar teniendo un accidente cerebrovascular.",
                                No: "Podrías tener hipertensión arterial."
                              }
                            },
                            No: "Podrías tener un problema digestivo. Se recomienda realizar exámenes más a fondo."
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            No: {
              question: "¿Tienes mareo o debilidad?",
              options: {
                Sí: {
                  question: "¿Tienes sudoración excesiva o temblores?",
                  options: {
                    Sí: "Podrías tener un bajón de azúcar.",
                    No: {
                      question: "¿Has estado en un ambiente caluroso o bajo el sol más de 6 horas?",
                      options: {
                        Sí: "Podrías tener un golpe de calor. No es una enfermedad.",
                        No: {
                          question: "¿Has consumido alguna sustancia tóxica o en exceso (alcohol, medicamentos, drogas)?",
                          options: {
                            Sí: "Podrías tener una intoxicación.",
                            No: "Podrías tener una migraña."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
    },
    //Perdida de conciencia
    "Perdida de conciencia":{
      question: "¿Tienes alguno de los siguientes síntomas: pérdida de conciencia?",
options: {
  Sí: {
    question: "¿Sientes mareo o debilidad?",
    options: {
      Sí: {
        question: "¿Has tenido latidos irregulares del corazón?",
        options: {
          Sí: "Tienes una arritmia cardiaca.",
          No: {
            question: "¿Tuviste dolor en el pecho antes de perder la conciencia?",
            options: {
              Sí: {
                question: "¿Tuviste dolor en el pecho antes de perder la conciencia nuevamente?",
                options: {
                  Sí: "Tienes un infarto miocárdico.",
                  No: "Tienes insuficiencia cardiaca."
                }
              },
              No: {
                question: "¿Tenías sudoración excesiva o ansiedad antes de perder la conciencia?",
                options: {
                  Sí: "Tienes un ataque de pánico.",
                  No: {
                    question: "¿Tenías sudoración, visión borrosa y confusión antes de perder la conciencia?",
                    options: {
                      Sí: {
                        question: "¿Tenías temblores y sensación de hambre?",
                        options: {
                          Sí: "Tienes un bajón de azúcar.",
                          No: {
                            question: "¿Has consumido alguna sustancia tóxica o en exceso (alcohol, medicamentos, drogas)?",
                            options: {
                              Sí: "Tienes una intoxicación.",
                              No: "Tienes insuficiencia cardiaca."
                            }
                          }
                        }
                      },
                      No: "Has sufrido un accidente cerebrovascular."
                    }
                  }
                }
              }
            }
          }
        }
      },
      No: {
        question: "¿Tienes dolor de pecho?",
        options: {
          Sí: {
            question: "¿El dolor era como una sensación de presión en el lado izquierdo del cuerpo?",
            options: {
              Sí: "Tienes un pre infarto.",
              No: {
                question: "¿Has tenido latidos irregulares?",
                options: {
                  Sí: "Tienes una arritmia cardiaca.",
                  No: {
                    question: "Además del dolor de pecho, ¿has tenido fatiga, dificultad para respirar o hinchazón de extremidades?",
                    options: {
                      Sí: "Tienes insuficiencia cardiaca.",
                      No: {
                        question: "Además del dolor de pecho, ¿has tenido miedo, ansiedad o palpitaciones aceleradas?",
                        options: {
                          Sí: "Tienes un ataque de pánico.",
                          No: "Tienes un accidente cerebrovascular."
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          No: {
            question: "¿Tienes sudoración excesiva?",
            options: {
              Sí: {
                question: "¿Además de la sudoración, tuviste dolor como una sensación de presión en el lado izquierdo del cuerpo?",
                options: {
                  Sí: "Tienes un pre infarto.",
                  No: {
                    question: "¿Has tenido mareo, visión borrosa o debilidad?",
                    options: {
                      Sí: "Tienes un bajón de azúcar.",
                      No: {
                        question: "¿Has sentido ansiedad o palpitaciones aceleradas?",
                        options: {
                          Sí: "Tienes un ataque de pánico.",
                          No: {
                            question: "¿Has sentido que el cuerpo se quedaba rígido o tuviste movimientos involuntarios?",
                            options: {
                              Sí: "Tienes meningitis.",
                              No: "Tienes un accidente cerebrovascular."
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

    },
    //Brote en la piel
    "Brote en la piel":{
      question:  "¿Tienes alguno de los siguientes síntomas: brote en la piel?",
options: {
  Sí: {
    question: "¿Dolor muscular?",
    options: {
      Sí: {
        question: "¿Ha presentado fiebre últimamente?",
        options: {
          Sí: "Posible Dengue",
          No: {
            question: "¿Es alérgico a algún medicamento, alimento o sustancia?",
            options: {
              Sí: {
                question: "¿Los ha consumido o tocado?",
                options: {
                  Sí: "Posible Alergia",
                  No: "Revisar evolución por 24h"
                }
              },
              No: {
                question: "¿El brote está acompañado por inflamaciones?",
                options: {
                  Sí: "Posible Alergia",
                  No: "Evaluar otras decisiones con estos síntomas"
                }
              }
            }
          }
        }
      },
      No: {
        question: "¿Náuseas?",
        options: {
          Sí: {
            question: "¿Ha presentado fiebre últimamente?",
            options: {
              Sí: "Posible Dengue",
              No: {
                question: "¿Es alérgico a algún medicamento o sustancia?",
                options: {
                  Sí: {
                    question: "¿Los ha consumido o tocado?",
                    options: {
                      Sí: "Posible Alergia",
                      No: "Revisar evolución por 24h"
                    }
                  },
                  No: "Evaluar otras decisiones con estos síntomas"
                }
              }
            }
          }
        }
      }
    }
  }
}

    },
    //Has sufrido un accidente o golpe
    "Has sufrido un accidente o golpe":{
      question: "¿Has sufrido un accidente o golpe?",
options: {
  Sí: {
    question: "¿La herida es abierta?",
    options: {
      Sí: {
        question: "¿La herida presenta sangrado y es profunda?",
        options: {
          Sí: {
            question: "¿La herida muestra signos de infección? (enrojecimiento, pus)",
            options: {
              Sí: "Tiene una herida infectada.",
              No: {
                question: "¿La herida está hinchada y tiene una forma anormal?",
                options: {
                  Sí: {
                    question: "¿Hay estructura ósea expuesta?",
                    options: {
                      Sí: "Fractura abierta.",
                      No: "Dislocación. No es una enfermedad. Debe pasar por traumatología."
                    }
                  },
                  No: "Esguince. No es una enfermedad. Revisar evolución por 24h y otros posibles síntomas."
                }
              }
            }
          }
        }
      },
      No: {
        question: "¿La herida está hinchada y tiene una forma anormal?",
        options: {
          Sí: {
            question: "¿Puede mover la extremidad?",
            options: {
              Sí: "Dislocación. No es una enfermedad. Pasar por traumatología.",
              No: "Fractura cerrada."
            }
          },
          No: "Esguince. No es una enfermedad. Revisar por 24h y otros posibles síntomas."
        }
      }
    }
  }
}

    },
  },
};