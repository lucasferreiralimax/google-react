import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Darkmode.scss';
import { useTranslation } from 'react-i18next';

function Darkmode({ type, store, dispatch }) {
  const { t } = useTranslation();

  const setStyleVariables = (objectVariables) => {
    for(let { name, value } of objectVariables) {
      document.documentElement.style.setProperty(name, value)
    }
  }

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(store.darkmode))

    !store.darkmode
    ? setStyleVariables([
      { name: '--main-color',              value: '#000'                       },
      { name: '--main-color-rgb',          value: '0,0,0'                      },
      { name: '--main-color-primary',      value: '#1a73e8'                    },
      { name: '--main-color-secondary',    value: 'green'                      },
      { name: '--main-bg-color-primary',   value: '#fff'                       },
      { name: '--main-bg-color-secondary', value: '#f2f2f2'                    },
      { name: '--main-invert',             value: '0'                          },
      { name: '--logo-filter',             value: 'none'                       },
      { name: '--input-bg-color',          value: '#fff'                       },
      { name: '--input-bg-color-hover',    value: '#fff'                       },
      { name: '--input-drop-shadow',       value: '#20212447'                  },
    ])
    : setStyleVariables([
      { name: '--main-color',              value: '#fff'                       },
      { name: '--main-color-rgb',          value: '255,255,255'                },
      { name: '--main-color-primary',      value: '#1a73e8'                    },
      { name: '--main-color-secondary',    value: 'green'                      },
      { name: '--main-bg-color-primary',   value: '#202124'                    },
      { name: '--main-bg-color-secondary', value: '#171717'                    },
      { name: '--main-invert',             value: '1'                          },
      { name: '--logo-filter',             value: 'grayscale(1) brightness(3)' },
      { name: '--input-bg-color',          value: '#202124'                    },
      { name: '--input-bg-color-hover',    value: '303134'                     },
      { name: '--input-drop-shadow',       value: '#171717'                    },
    ])
  }, [store.darkmode])

  const pathSun  = 'M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 115.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 12a5 5 0 1110 0 5 5 0 01-10 0zm-5 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.05 4.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-11.314 0a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z';
  const pathMoon = 'M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z';

  return (
    <button
      data-testid="app-darkmode"
      type="button" onClick={() => dispatch({type: 'TOGGLE_DARKMODE'})}
      className={ `darkmode${store.darkmode ? ' active' : '' }${type ? ' footer' : '' }`}
      aria-label="Toggle darkmode"
    >
      { type
        ? (
          <svg width="25px" height="25px" viewBox="-5 -5 34 34" fill="var(--main-color)">
            { store.darkmode
              ? <path d={pathSun} />
              : <path d={pathMoon} />
            }
          </svg>
        )
        : (
          <div>
            <span>{t('text.darkmode')}</span>
            <input id="darkmode" type="checkbox" checked={store.darkmode} />
          </div>
        )
      }
    </button>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Darkmode);
