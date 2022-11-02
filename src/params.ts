export const getScriptStorage = async (): Promise<{
    [key: string]: string
}> => ScriptProperties.getProperties()

export const FORM_LAST_SUCCESFUL_RUN = 'FORM_LAST_SUCCESFUL_RUN'
